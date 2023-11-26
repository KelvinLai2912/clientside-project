import { Injectable } from '@nestjs/common';
import { Event } from './event.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEvent, Catagory } from '@kelvin/shared/api';

@Injectable()
export class EventService {
    constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>) {
        this.seedDb();
    }
    
    async seedDb() {
        let currentEvents = await this.findAll();
        if (currentEvents.length > 0) {
          return;
        }
        let seedEvent1 = new Event();
        seedEvent1.eventName = 'Skate Street Challenge';
        seedEvent1.eventDate = new Date('2023-06-01');
        seedEvent1.time = '14:00';
        seedEvent1.discription = 'An exciting street skateboarding event.';
        seedEvent1.catagory = Catagory.Street;
        seedEvent1.amount = 150;
        const newSeedEvent1 = new this.eventModel(seedEvent1);
        await newSeedEvent1.save();
    
    }

    async findAll(): Promise<Event[]> {
        return await this.eventModel.find().exec();
    }

    async findOne(_id: string): Promise<Event | null> {
        return await this.eventModel.findOne({ _id }).exec();
    }

    async create(event: Partial<Event>): Promise<Event> {
        // If _id is an empty string, remove it
        if (event._id === '') {
            delete event._id;
        }
        const newEvent = new this.eventModel(event);
        return await newEvent.save();
    }

    async update(id: string, event: Partial<IEvent>): Promise<Event | null> {
        // Update event by id
        return await this.eventModel.findByIdAndUpdate(id, event, { new: true }).exec();
    }
    
    async delete(id: string): Promise<void> {
        await this.eventModel.findByIdAndDelete(id).exec();
    }

    // If you have additional event-specific logic, implement those methods here
}
