import { Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { IEvent } from '@kelvin/shared/api';
import { CreateEventDto } from '@kelvin/backend/dto';

@Controller('event')
export class EventController { 
    constructor(private eventService: EventService) {}

    @Get('')
    async getAll(): Promise<IEvent[]> {
        return await this.eventService.findAll(); 
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<IEvent | null> {
        return await this.eventService.findOne(id); 
    }

    @Post('')
    async create(@Body() data: CreateEventDto): Promise<IEvent> {
        return this.eventService.create(data as IEvent); 
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<IEvent>): Promise<IEvent | null> {
        return this.eventService.update(id, data as IEvent); 
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.eventService.delete(id); 
    }
}
