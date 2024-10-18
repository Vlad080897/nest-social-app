import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import bcrypt from 'bcrypt';
import { TokenService } from './token.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  signup(data: any) {
    const { email, password, username } = data;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = this.userService.findUser(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    // const hashedPassword = this.hashPassword(password);

    // Save user to database

    return {
      username,
    };
  }

  login(data: any) {
    const { email, password } = data;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = this.userService.findUser(email);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isPasswordValid = this.comparePasswords(password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }

    const accessToken = this.tokenService.generateAccessToken({
      username: user.username,
    });

    const refreshToken = this.tokenService.generateRefreshToken({
      username: user.username,
    });

    // Save refresh token to database

    return {
      username: user.username,
      accessToken,
      refreshToken,
    };
  }

  async refresh(data: { refreshToken: string }) {
    const { refreshToken } = data;

    const result = this.tokenService.verifyRefreshToken(refreshToken);

    if (!result.username) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const token = await this.tokenService.findToken(refreshToken);

    if (!token) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const accessToken = this.tokenService.generateAccessToken({
      username: result.username,
    });

    return {
      accessToken,
    };
  }

  hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  comparePasswords(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
  }
}
