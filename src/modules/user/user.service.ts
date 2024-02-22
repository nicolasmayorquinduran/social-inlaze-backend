import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Feed } from '@entities/feed.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Feed)
    private feedRepository: Repository<Feed>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['feed'],
    });
  }
  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }
  async create(user: User): Promise<User> {
    user.password = await this.hashPassword(user.password);
    const feed = await this.feedRepository.save({ posts: [] });
    user = { ...user, feed };
    return this.userRepository.save(user);
  }
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async matchHasshedPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  }
}
