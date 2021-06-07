export interface ICreateUserDto {
  username: string;
  email: string;
  password: string;
}

export interface ISignInUserDto {
  email: string;
  password: string;
}
