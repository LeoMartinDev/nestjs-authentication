import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Auth } from '../auth/auth.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column() email: string;

  @OneToOne(type => Auth, auth => auth.user)
  auth: Auth;
}
