import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from './post.entity';
import { CommonFields } from './commonfields';

@Entity()
export class Feed extends CommonFields {
  @OneToMany(() => Feed, (feed) => feed.posts)
  posts: Post[];
}
