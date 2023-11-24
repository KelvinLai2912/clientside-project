import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate
} from 'class-validator';
import {
    Gender,
    ICreateUser,
    IUpdateUser,
    IUpsertUser,
    
} from '@kelvin/shared/api';

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
