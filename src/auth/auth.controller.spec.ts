import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Auth } from './auth.entity';
import { RefreshToken } from './refresh-token.entity';
import { AuthService } from './auth.service';
import { getTypeORMConfig } from '../../test/testing.utils';

describe('Auth Controller', () => {
  let controller: AuthController;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(getTypeORMConfig()),
        TypeOrmModule.forFeature([User, Auth, RefreshToken]),
      ],
      providers: [AuthService],
      controllers: [AuthController],
    }).compile();
    controller = module.get<AuthController>(AuthController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('register', () => {
    it('should SUCCESS', async () => {
      const user = {
        email: 'test@test.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'testtest',
      };

      return expect(await controller.register(user)).toBeTruthy();
    });
  });
});
