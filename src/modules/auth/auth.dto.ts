import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { ICreateUserDto, ISignInUserDto } from 'src/@types';

export class CreateUserDto implements ICreateUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  username: string;
}

export class SignInUserDto implements ISignInUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
