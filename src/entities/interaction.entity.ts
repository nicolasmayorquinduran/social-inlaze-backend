import { InteractionTypesEnum } from 'src/models/enums/entities';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from './post.entity';
import { CommonFields } from './commonfields';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Interaction extends CommonFields {
  @Column({
    type: 'enum',
    enum: InteractionTypesEnum,
    default: InteractionTypesEnum.like,
  })
  type: InteractionTypesEnum;

  @ManyToOne(() => Interaction, (interaction) => interaction.post)
  post: Post;
}
