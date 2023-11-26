import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate,
    IsArray
} from 'class-validator';
import {
    Gender,
    ICreateUser,
    IUpdateUser,
    IUpsertUser,
    
} from '@kelvin/shared/api';

import { Types } from 'mongoose';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateUserDto implements ICreateUser {
    @IsString()
    @IsNotEmpty()
    FirstName!: string;
    
    @IsString()
    @IsNotEmpty()
    LastName!: string;

    @IsString()
    @IsNotEmpty()
    Password!: string;

    @IsString()
    @IsNotEmpty()
    Email!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;

    @IsString()
    @IsNotEmpty()
    Gender!: Gender;
}


export class UpsertUserDto implements IUpsertUser {
    @IsString()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    FirstName!: string;
    
    @IsString()
    @IsNotEmpty()
    LastName!: string;

    @IsString()
    @IsNotEmpty()
    Password!: string;

    @IsString()
    @IsNotEmpty()
    Email!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;

    @IsString()
    @IsNotEmpty()
    Gender!: Gender;

    @IsArray()
    @IsOptional() 
    @IsString({ each: true }) 
    events!: Types.ObjectId[];
}

export class UpdateUserDto implements IUpdateUser {
    @IsString()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    FirstName!: string;
    
    @IsString()
    @IsNotEmpty()
    LastName!: string;

    @IsString()
    @IsNotEmpty()
    Email!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}
