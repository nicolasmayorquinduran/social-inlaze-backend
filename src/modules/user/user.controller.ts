import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@entities/user.entity';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Post('user')
  async createUser(@Body() user: User) {
    return await this.userService.create(user);
  }

  @Put('user/:id')
  async updateUser(@Param('id') id: number, @Body() user: Partial<User>) {
    return await this.userService.update(id, user);
  }
}
