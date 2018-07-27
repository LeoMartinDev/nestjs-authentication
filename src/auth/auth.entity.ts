import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from 'users/user.entity';
import { RefreshToken } from './refresh-token.entity';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn() id: number;

  @Column() login: string;

  @Column() password: string;

  @Column() isActive: boolean;

  @Column() activationToken?: string;

  @Column() activationTokenExpiresAt?: string;

  @OneToMany(type => RefreshToken, refreshToken => refreshToken.auth)
  refreshTokens: RefreshToken[];

  @OneToOne(type => User, user => user.auth)
  @JoinColumn()
  user: User;
}
