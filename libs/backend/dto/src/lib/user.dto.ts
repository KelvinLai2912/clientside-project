import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate
} from 'class-validator';
import {
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
    Email!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;


}

export class UpsertUserDto implements IUpsertUser {
    @IsString()
    @IsNotEmpty()
    id!: string;

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


}

export class UpdateUserDto implements IUpdateUser {
    @IsString()
    @IsNotEmpty()
    id!: string;

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
