import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Auth } from './auth.entity';
import { RefreshToken } from './refresh-token.entity';
import { getTypeORMConfig } from '../../test/testing.utils';

describe('AuthService', async () => {
  let service: AuthService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(getTypeORMConfig()),
        TypeOrmModule.forFeature([User, Auth, RefreshToken]),
      ],
      providers: [AuthService],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  const rawPassword = 'test';

  describe('hashPassword and comparePassword', () => {
    it('hashes and compares password, should SUCCESS', async () => {
      const hashedPassword = await service.hashPassword(rawPassword);

      return expect(await service.comparePassword(rawPassword, hashedPassword)).toBe(true);
    });
  });

  describe('register', () => {
    it('should SUCCESS', async () => {
      const user = {
        email: 'test@test.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'testtest',
      };

      return expect(await service.register(user)).toBeDefined();
    });

    it('invalid email', async () => {
      const user = {
        email: 'invalid-email',
        firstName: 'John',
        lastName: 'Doe',
        password: 'testtest',
      };

      return expect(service.register(user)).rejects.toHaveProperty('status', 400);
    });
  });
});
