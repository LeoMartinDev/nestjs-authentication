import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './DTO/register.dto';
import { LoginDTO } from './DTO/login.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('register')
    async register(@Body() payload: RegisterDTO) {
        return this.authService.register(payload);
    }

    @Post('login')
    async login(@Body() payload: LoginDTO) {

    }

}
