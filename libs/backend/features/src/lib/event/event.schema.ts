import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsMongoId } from 'class-validator';
import { Catagory } from '@kelvin/shared/api';

@Schema()
export class Event  {
  @IsMongoId()
  _id!: string;

  @Prop({ required: true })
  eventName!: string;

  @Prop({ required: true })
  eventDate!: Date;

  @Prop({ required: true })
  time!: string;

  @Prop({ required: true })
  discription!: string;

  @Prop({ required: true, type: String, enum: Object.values(Catagory) })
  catagory!: Catagory;

  @Prop({ required: true })
  amount!: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);
