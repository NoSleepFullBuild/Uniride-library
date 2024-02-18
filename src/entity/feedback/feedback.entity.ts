import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base/base.entity';

@Entity()
export class Feedback extends BaseEntity {

    @Column({ type: 'int'})
    userId: number;

    @Column({ type: 'int'})
    tripId: number;

    @Column({ type: 'varchar', length: 255 })
    message: string;

    @Column({ type: 'int'})
    rating: number;

    @Column({ type: 'varchar', length: 255 })
    date: string;
   
}