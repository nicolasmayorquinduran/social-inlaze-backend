import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Interaction } from './interaction.entity';
import { CommonFields } from './commonfields';
import { Feed } from './feed.entity';
import { IsNotEmpty } from 'class-validator';
@Entity()
export class Post extends CommonFields {
  @Column()
  @IsNotEmpty({ message: 'El titulo es requerido' })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Feed, (feed) => feed.posts)
  feed: Feed;

  @OneToMany(() => Post, (post) => post.interactions)
  interactions: Interaction[];
}
