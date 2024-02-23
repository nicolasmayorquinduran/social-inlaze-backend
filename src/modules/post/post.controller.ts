import {
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from '@modules/auth/auth-jwt.guard';
import { Post as PostEntity } from '@entities/post.entity';

@Controller('')
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Get('posts')
  async getAllposts() {
    return await this.postService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('post')
  async createPost(@Body() post: PostEntity) {
    return await this.postService.create(post);
  }

  @UseGuards(JwtAuthGuard)
  @Put('post/:id')
  async updatePost(@Param('id') id: number, @Body() post: Partial<PostEntity>) {
    return await this.postService.update(id, post);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('post/:id')
  async deletePost(@Param('id') id: number) {
    return await this.postService.delete(id);
  }
}
