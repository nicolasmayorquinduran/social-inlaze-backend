import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { Feed } from '@entities/feed.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Feed])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
