import { Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from 'auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    SharedModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
})
export class AppModule {}
