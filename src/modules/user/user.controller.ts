import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@entities/user.entity';
import { JwtAuthGuard } from '@modules/auth/auth-jwt.guard';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('users')
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put('user/:id')
  async updateUser(@Param('id') id: number, @Body() user: Partial<User>) {
    return await this.userService.update(id, user);
  }
}
