import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { UserDocument } from 'src/@types';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Request() req): Promise<UserDocument> {
    return this.usersService.findOne({ _id: req.user._id });
  }
}
