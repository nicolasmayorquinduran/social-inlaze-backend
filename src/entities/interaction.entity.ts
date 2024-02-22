import { InteractionTypesEnum } from 'src/models/enums/entities';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from './post.entity';
import { CommonFields } from './commonfields';

@Entity()
export class Interaction extends CommonFields {
  @Column()
  type: string;

  @Column({
    type: 'enum',
    enum: InteractionTypesEnum,
    default: InteractionTypesEnum.like,
  })
  role: InteractionTypesEnum;

  @ManyToOne(() => Interaction, (interaction) => interaction.post)
  post: Post;
}
