import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Get, Param, Post, Body,  Put, Delete } from '@nestjs/common';
import { IUser } from '@kelvin/shared/api'; 
import { CreateUserDto } from '@kelvin/backend/dto'; 


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('')
    async getAll(): Promise<IUser[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<IUser | null> {
        return await this.userService.findOne(id);
    }

    @Post('')
    async create(@Body() data: CreateUserDto): Promise<IUser> {
        return this.userService.create(data as IUser);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<IUser>): Promise<IUser | null> {
        return this.userService.update(id, data as IUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }


    @Post(':userId/event/:eventId')
    async addEvent(@Param('userId') userId: string, @Param('eventId') eventId: string): Promise<IUser> {
        return this.userService.addEventToUser(userId, eventId);
    }

    @Delete(':userId/event/:eventId')
    async removeEvent(@Param('userId') userId: string, @Param('eventId') eventId: string): Promise<IUser> {
        return this.userService.removeEventFromUser(userId, eventId);
    }

}