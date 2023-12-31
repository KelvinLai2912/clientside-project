import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gender } from '@kelvin/shared/api';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
        this.seedDb();
    
    }
    
    async seedDb() {
            let currentUsers = await this.findAll();
            if (currentUsers.length > 0) {
              return;
            }
            let seedUser1 = new User();
            seedUser1.FirstName = 'Kelvin';
            seedUser1.LastName = 'Lai';
            seedUser1.Email = 'kkf.lai@student-avans.nl';
            seedUser1.Password = 'secret';
            seedUser1.birthDate = new Date('2000-01-01');
            seedUser1.Gender = Gender.Male;
            const newSeedUser1 = new this.userModel(seedUser1);
            await newSeedUser1.save();
        
    }
    
    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
    async findOne(_id: string): Promise<User | null> {
        return await this.userModel.findOne({ _id: _id }).exec();
    }

    async create(user: Partial<User>): Promise<User> {
        // If user data comes with an empty string _id, delete it to avoid cast errors
        if (user._id === '') {
            delete user._id;
        }

        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async update(id:string, user: User): Promise<User | null> {
        //get user by id and update it
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }
    
    async delete(id: string): Promise<void> {
        await this.userModel.findByIdAndDelete({ _id: id });
        return;}

    async addEventToUser(userId: string, eventId: string): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(
            userId,
            { $addToSet: { events: eventId } },
            { new: true }
        ).exec();

        if (!updatedUser) {
            throw new Error(`User with ID ${userId} not found`);
        }

        return updatedUser;
    }

    async removeEventFromUser(userId: string, eventId: string): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(
            userId,
            { $pull: { events: eventId } },
            { new: true }
        ).exec();
        
        if (!updatedUser) {
            throw new Error(`User with ID ${userId} not found`);
        }

        return updatedUser;
    }
        
}