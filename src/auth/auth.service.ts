import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { RegisterDTO } from './DTO/register.dto';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  hashPassword(rawPassword: string, saltRounds: number = 10): Promise<string> {
    return hash(rawPassword, saltRounds);
  }

  comparePassword(rawPassword: string, hash: string): Promise<boolean> {
    return compare(rawPassword, hash);
  }

  async register({ firstName, lastName, email, password } : RegisterDTO): Promise<User> {
    const user = new User();
    const auth = new Auth();

    auth.login = email;
    auth.password = await this.hashPassword(password);
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.auth = auth;
    return this.userRepository.save(user);
  }
}
