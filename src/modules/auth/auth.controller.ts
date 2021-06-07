import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto, SignInUserDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() payload: CreateUserDto) {
    return this.authService.createAccount(payload);
  }

  @Post('sign-in')
  async signIn(@Body() payload: SignInUserDto) {
    return this.authService.login(payload);
  }
}
