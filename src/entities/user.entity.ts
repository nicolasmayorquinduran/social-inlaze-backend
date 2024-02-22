import { Entity, Column, OneToOne, JoinColumn, Unique } from 'typeorm';
import { Post } from './post.entity';
import { CommonFields } from './commonfields';
import { Feed } from './feed.entity';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

@Entity()
export class User extends CommonFields {
  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @Unique(['email'])
  @Column()
  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  @IsNotEmpty({ message: 'El correo es requerido' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  password: string;

  @OneToOne(() => Feed)
  @JoinColumn()
  feed: Feed;
}
