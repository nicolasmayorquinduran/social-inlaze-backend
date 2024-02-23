import { Post } from '@entities/post.entity';
import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find({
      relations: ['user'],
    });
  }

  async create(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }

  async update(postId: number, post: Partial<Post>): Promise<Post> {
    await this.postRepository.update(postId, post);
    return this.postRepository.findOne({
      where: { id: postId },
    });
  }

  async delete(postId: number) {
    await this.postRepository.delete(postId);
  }
}
