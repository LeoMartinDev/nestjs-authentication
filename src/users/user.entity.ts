import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Unique } from 'typeorm';
import { Auth } from '../auth/auth.entity';
import { Timestamps } from '../shared/timestamps.class';
import { IsEmail, Length, ValidateNested } from 'class-validator';

@Entity()
export class User extends Timestamps {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  @Length(2, 20)
  firstName: string;

  @Column()
  @Length(2, 20)
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @OneToOne(type => Auth, auth => auth.user)
  @ValidateNested()
  auth: Auth;
}
