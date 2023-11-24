import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsMongoId } from 'class-validator';
import { Gender } from '@kelvin/shared/api';

@Schema()
export class User {
  @IsMongoId()
  _id!: string;

  @Prop({ required: true })
  FirstName!: string;

  @Prop({ required: true })
  LastName!: string;

  @Prop({ required: true })
  Email!: string;

  @Prop({ required: true })
  birthDate!: Date;

  @Prop({ required: true })
  Password!: string;

  @Prop({ required: true, type: String, enum: Object.values(Gender) })
  Gender!: Gender;
}


export const UserSchema = SchemaFactory.createForClass(User);