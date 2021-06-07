import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { UserDocument } from 'src/@types';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly service: Model<UserDocument>,
  ) {}

  async findOne(
    data: FilterQuery<Partial<UserDocument>>,
  ): Promise<UserDocument> {
    return this.service.findOne(data);
  }

  async create(data: Partial<User>): Promise<UserDocument> {
    return this.service.create(data);
  }
}
