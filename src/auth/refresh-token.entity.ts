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

@Entity()
export class RefreshToken {
    @PrimaryColumn() id: number;

    @Column() token: string;

    @Column({ type: 'datetime' }) expiresAt: Date;

    @Column({ type: 'tinyint' }) isActive: boolean;

    @ManyToOne(type => Auth, auth => auth.refreshTokens)
    auth: Auth;
}
