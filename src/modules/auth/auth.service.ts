import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ICreateUserDto, ISignInUserDto } from 'src/@types';
import bcrypt = require('bcrypt');
import { SALT_ROUNDS } from 'src/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(payload: ISignInUserDto) {
    try {
      const user = await this.usersService.findOne({ email: payload.email });
      if (!user) {
        throw new BadRequestException('User not found');
      }
      const isPasswordValid = bcrypt.compareSync(
        payload.password,
        user.password,
      );
      if (isPasswordValid) {
        return {
          email: user.email,
          username: user.username,
          access_token: this.jwtService.sign({
            _id: user._id,
          }),
        };
      } else {
        throw new UnauthorizedException('Invalid password');
      }
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async createAccount(payload: ICreateUserDto) {
    try {
      const pass = bcrypt.hashSync(payload.password, SALT_ROUNDS);
      const user = await this.usersService.create({
        ...payload,
        password: pass,
      });
      return {
        email: user.email,
        username: user.username,
        access_token: this.jwtService.sign({
          _id: user._id,
        }),
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
