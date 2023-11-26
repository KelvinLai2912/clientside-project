import { Id } from './id.type';
import { Types } from 'mongoose';

export interface IUser {
    _id: Id;
    FirstName: string;
    LastName: string;
    Password: string;
    Email: string;
    birthDate: Date;
    Gender: Gender;
    events: Types.ObjectId[];

}

export enum Gender {
    Male = 'Male',
    Female = 'Female'
  }

export type ICreateUser = Pick<
    IUser,
    'FirstName' | 'LastName' | 'Password'| 'Email' | 'birthDate' | 'Gender'

>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;

