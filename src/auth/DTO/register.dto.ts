import { IsEmail, Length } from 'class-validator';

export class RegisterDTO {
  @Length(2, 20)
  readonly firstName: string;

  @Length(2, 20)
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @Length(8, 25)
  readonly password: string;
}