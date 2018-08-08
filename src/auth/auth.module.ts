import { Module } from '@nestjs/common';
import { User } from 'users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
import { RefreshToken } from './refresh-token.entity';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Auth, RefreshToken])],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
