import { Id } from './id.type';



// Voor nu is onze user een string; later zullen we hier een User object van maken.
type User = string;

export interface IUser {
    id: Id;
    FirstName: string;
    LastName: string;
    Password: string;
    Email: string;
    birthDate: Date;
    Gender: boolean;

}

export type ICreateUser = Pick<
    IUser,
    'FirstName' | 'LastName' | 'Password'| 'Email' | 'birthDate' | 'Gender'

>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;

