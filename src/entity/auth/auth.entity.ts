import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  role: string;

  @Column({ length: 255 })
  password: string;
  
}
