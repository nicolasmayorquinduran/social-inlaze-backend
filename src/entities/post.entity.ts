import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { CommonFields } from './commonfields';
import { IsNotEmpty } from 'class-validator';
@Entity()
export class Post extends CommonFields {
  @Column()
  @IsNotEmpty({ message: 'El titulo es requerido' })
  title: string;

  @Column()
  content: string;

  @Column()
  likes: number;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  user: User;
}
