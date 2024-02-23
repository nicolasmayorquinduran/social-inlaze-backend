import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { creadentialsInterface } from '@models/interfaces/services';
import { UserService } from '@modules/user/user.service';
import { User } from '@entities/user.entity';
@Controller('')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  @Post('login')
  async login(@Body() body: creadentialsInterface) {
    return this.authService.validateCredentials(body);
  }

  @Post('register')
  async register(@Body() body: User) {
    return this.userService.create(body);
  }
}
