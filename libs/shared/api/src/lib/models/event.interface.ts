import { Id } from './id.type';

export interface IEvent {
  _id: Id;
  eventName: string;
  eventDate: Date;
  time: string; 
  discription: string;
  catagory: Catagory;
  amount: number; 
}

export enum Catagory {
    Street = "Street Skateboarding",
    Vert = "Vert Skateboarding",
    Freestyle = "Freestyle Skateboarding",
    Park = "Skatepark Skateboarding"
  }


export type ICreateEvent = Pick<
    IEvent,
    'eventName' | 'eventDate' | 'time'| 'discription' | 'catagory' | 'amount'

>;
export type IUpdateEvent = Partial<Omit<IEvent, 'id'>>; 
export type IUpsertEvent = IEvent;

