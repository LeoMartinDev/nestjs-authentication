import { Equals, IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export class PasswordLoginDTO {
  @Equals('password')
  readonly grantType: 'password';

  @IsString()
  readonly login: string;

  @IsString()
  readonly password: string;
}

export class RefreshTokenLoginDTO {
  @Equals('refreshToken')
  readonly grant_type: 'refreshToken';

  @IsString()
  readonly refreshToken: string;
}

export type LoginDTO = PasswordLoginDTO | RefreshTokenLoginDTO;