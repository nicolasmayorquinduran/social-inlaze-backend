import { Controller, Post, UseGuards, Request } from '@nestjs/common';
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
  async login(@Request() req: creadentialsInterface) {
    return this.authService.validateCredentials(req);
  }

  @Post('register')
  async register(@Request() req: User) {
    return this.userService.create(req);
  }
}
