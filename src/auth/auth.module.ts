import { Module } from '@nestjs/common';
import { User } from 'users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
