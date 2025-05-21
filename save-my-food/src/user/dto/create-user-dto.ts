import {IsEmail, IsString, IsStrongPassword, MinLength} from 'class-validator';

export class createUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    list:string;
}