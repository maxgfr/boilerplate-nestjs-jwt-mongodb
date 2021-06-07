import { Document } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = IUser & Document;
