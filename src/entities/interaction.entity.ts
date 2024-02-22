import { InteractionTypesEnum } from 'src/models/enums/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Interaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({
    type: 'enum',
    enum: InteractionTypesEnum,
    default: InteractionTypesEnum.like,
  })
  role: InteractionTypesEnum;
}
