import { Controller, Get } from '@nestjs/common';
import { Auth } from '../auth/auh.decorator';

@Controller('users')
export class UsersController {

  @Get('/me')
  async getMe(@Auth() { userId }) {

  }

}
