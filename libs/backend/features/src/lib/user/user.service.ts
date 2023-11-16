import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '@kelvin/shared/api'; 
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
    TAG = 'UserService';

    private users$ = new BehaviorSubject<IUser[]>([
        {
            id: '0',
            FirstName: 'John',
            LastName: 'Doe',
            Email: 'johndoe@example.com',
            birthDate: new Date(),
        },

        {
            id: '1',
            FirstName: 'Jane',
            LastName: 'Doe',
            Email: '',
            birthDate: new Date(),
        },

        {
            id: '2',
            FirstName: 'John',
            LastName: 'Smith',
            Email: '',      
            birthDate: new Date(),
        },

        {
            id: '3',
            FirstName: 'Jane',
            LastName: 'Smith',
            Email: '',
            birthDate: new Date(),
        },

        {
            id: '4',
            FirstName: 'Kelvin',
            LastName: 'Lai',
            Email: '',
            birthDate: new Date(),
        },


    ]);

    getAll(): IUser[] {
        Logger.log('getAll', this.TAG);
        return this.users$.value;
    }

    getOne(id: string): IUser {
        Logger.log(`getOne(${id})`, this.TAG);
        const user = this.users$.value.find((user) => user.id === id);
        if (!user) {
            throw new NotFoundException(`User could not be found!`);
        }
        return user;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(user: Pick<IUser, 'FirstName' | 'LastName' | 'Email' | 'birthDate'>): IUser {
        Logger.log('create', this.TAG);
        const current = this.users$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newUser: IUser = {
            ...user,
            id: `user-${Math.floor(Math.random() * 10000)}`,
        };
        this.users$.next([...current, newUser]);
        return newUser;
    }
}
