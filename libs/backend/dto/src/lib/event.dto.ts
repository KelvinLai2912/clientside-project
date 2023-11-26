import {
    IsNotEmpty,
    IsString,
    IsDate,
    IsNumber,
    IsBoolean,
    IsOptional
} from 'class-validator';
import {
    Catagory,
    ICreateEvent,
    IUpdateEvent,
    IUpsertEvent
} from '@kelvin/shared/api';


export class CreateEventDto implements ICreateEvent {
    @IsString()
    @IsNotEmpty()
    eventName!: string;
    
    @IsDate()
    @IsNotEmpty()
    eventDate!: Date;

    @IsString()
    @IsNotEmpty()
    time!: string;

    @IsString()
    @IsNotEmpty()
    discription!: string;

    @IsString()
    @IsNotEmpty()
    catagory!: Catagory;

    @IsNumber()
    @IsNotEmpty()
    amount!: number;
}

export class UpsertEventDto implements IUpsertEvent {
    @IsString()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    eventName!: string;
    
    @IsDate()
    @IsNotEmpty()
    eventDate!: Date;

    @IsString()
    @IsNotEmpty()
    time!: string;

    @IsString()
    @IsNotEmpty()
    discription!: string;

    @IsString()
    @IsNotEmpty()
    catagory!: Catagory;

    @IsNumber()
    @IsNotEmpty()
    amount!: number;

    
}

export class UpdateEventDto implements IUpdateEvent {
    @IsString()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    eventName!: string;
    
    @IsDate()
    @IsNotEmpty()
    eventDate!: Date;

    @IsString()
    @IsNotEmpty()
    time!: string;

    @IsString()
    @IsNotEmpty()
    discription!: string;

    @IsString()
    @IsNotEmpty()
    catagory!: Catagory;

    @IsNumber()
    @IsNotEmpty()
    amount!: number;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
    
}
