import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Feed } from '@entities/feed.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Feed)
    private feedRepository: Repository<Feed>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
  async create(user: User): Promise<User> {
    const { id: idFeed } = await this.feedRepository.save({ posts: [] });
    user.feed.id = idFeed;
    return this.userRepository.save(user);
  }
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({
      where: { id },
    });
  }
}
