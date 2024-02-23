import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { Post } from './post.entity';
import { CommonFields } from './commonfields';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

@Entity()
export class User extends CommonFields {
  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  FullName: string;

  @Column()
  age: number;

  @Unique(['email'])
  @Column()
  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  @IsNotEmpty({ message: 'El correo es requerido' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'La clave es requerida' })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
