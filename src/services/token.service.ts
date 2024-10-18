import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

interface Token {
  token: string;
}

@Injectable()
export class TokenService {
  constructor(private readonly configService: ConfigService) {}
  private readonly accessTokenSecret = this.configService.get<string>(
    'ACCESS_TOKEN_SECRET',
  );
  private readonly refreshTokenSecret = this.configService.get<string>(
    'REFRESH_TOKEN_SECRET',
  );
  private readonly accessTokenExpiresIn = this.configService.get<string>(
    'ACCESS_TOKEN_EXPIRES_IN',
  );
  private readonly refreshTokenExpiresIn = this.configService.get<string>(
    'REFRESH_TOKEN_EXPIRES_IN',
  );

  generateAccessToken(data: { username: string }) {
    return jwt.sign(data, this.accessTokenSecret, {
      expiresIn: this.accessTokenExpiresIn,
    });
  }

  generateRefreshToken(data: { username: string }) {
    return jwt.sign(data, this.refreshTokenSecret, {
      expiresIn: this.refreshTokenExpiresIn,
    });
  }

  verifyRefreshToken(token: string): { username: string } {
    try {
      return jwt.verify(token, this.refreshTokenSecret) as { username: string };
    } catch (_) {
      return null;
    }
  }

  async findToken(token: string): Promise<Token> {
    // Find token in database
    return { token };
  }
}
