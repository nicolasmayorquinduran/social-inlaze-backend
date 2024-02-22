import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Interaction } from './interaction.entity';
import { CommonFields } from './commonfields';
import { Feed } from './feed.entity';
@Entity()
export class Post extends CommonFields {
  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Feed, (feed) => feed.posts)
  feed: Feed;

  @OneToMany(() => Post, (post) => post.interactions)
  interactions: Interaction[];
}
