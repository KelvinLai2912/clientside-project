import { Id } from './id.type';



// Voor nu is onze user een string; later zullen we hier een User object van maken.
type User = string;

export interface IUser {
    id: Id;
    FirstName: string;
    LastName: string;
    Email: string;
    birthDate: Date;

}

export type ICreateUser = Pick<
    IUser,
    'FirstName' | 'LastName' | 'Email' | 'birthDate'

>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;

