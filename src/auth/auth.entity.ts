import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  Unique, BeforeInsert, BeforeUpdate,
} from 'typeorm';
import { RefreshToken } from './refresh-token.entity';
import { IsDate, IsIn, IsOptional, IsString, Length, validate, ValidateNested } from 'class-validator';
import { Timestamps } from '../shared/timestamps.class';
import { User } from '../users/user.entity';

export enum State {
  ACTIVE = 'active',
  PENDING = 'pending',
  DENIED = 'denied',
}

@Entity()
export class Auth extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Length(5, 15)
  login: string;

  @Column()
  @IsString()
  password: string;

  @Column({ default: State.PENDING })
  @IsIn(Object.values(State))
  @IsOptional()
  state: State;

  @Column()
  @IsString()
  @IsOptional()
  activationToken?: string;

  @Column('datetime')
  @IsDate()
  @IsOptional()
  activationTokenExpiresAt?: string;

  @OneToMany(type => RefreshToken, refreshToken => refreshToken.auth)
  @IsOptional()
  @ValidateNested()
  refreshTokens: RefreshToken[];

  @OneToOne(type => User, user => user.auth)
  @JoinColumn()
  @ValidateNested()
  user: User;
}
