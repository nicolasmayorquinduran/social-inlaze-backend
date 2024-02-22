import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Post } from './post.entity';
import { CommonFields } from './commonfields';
import { Feed } from './feed.entity';

@Entity()
export class User extends CommonFields {
  @Column()
  name: string;

  @Column()
  email: string;

  @OneToOne(() => Feed)
  @JoinColumn()
  feed: Feed;
}
