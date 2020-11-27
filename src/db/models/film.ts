import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity('movies')
export class Film extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  plot_summary: string;
  @Column()
  duration: number;
}
