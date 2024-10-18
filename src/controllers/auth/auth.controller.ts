import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() data: any) {
    return this.authService.signup(data);
  }

  @Post('login')
  login(@Body() data: any) {
    return this.authService.login(data);
  }

  @Post('refresh')
  refresh(@Body() data: any) {
    return this.authService.refresh(data);
  }
}
