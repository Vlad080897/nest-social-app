import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthService } from '../services/auth.service';
import { UserService } from 'src/services/user.service';
import { TokenService } from 'src/services/token.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [TokenService, UserService, AuthService],
})
export class AuthModule {}
