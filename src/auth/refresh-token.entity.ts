import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    PrimaryColumn,
    ManyToOne,
} from 'typeorm';
import { Auth } from './auth.entity';
import { Timestamps } from '../shared/timestamps.class';
import { IsString, Length } from 'class-validator';

@Entity()
export class RefreshToken extends Timestamps {
    @PrimaryColumn()
    id: number;

    @Column()
    @Length(5, 15)
    name: string;

    @Column({ unique: true })
    @IsString()
    token: string;

    @ManyToOne(type => Auth, auth => auth.refreshTokens)
    auth: Auth;
}
