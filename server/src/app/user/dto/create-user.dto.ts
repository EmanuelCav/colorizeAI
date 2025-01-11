import { IsString, IsEmail, Matches, MinLength, MaxLength, IsNotEmpty, ValidateIf } from 'class-validator';

export class LoginDto {
    @IsNotEmpty({ message: "There are empty fields. Please complete" })
    @IsString()
    email: string;

    @IsNotEmpty({ message: "There are empty fields. Please complete" })
    @IsString()
    password: string;
}

export class RegisterDto {
    @IsNotEmpty({ message: "There are empty fields. Please complete" })
    @IsString()
    @Matches(/^[a-zA-Z0-9]+$/, { message: 'The username can only contain letters and numbers' })
    @MinLength(3, { message: 'Username must be at least 3 characters' })
    @MaxLength(20, { message: 'Username cannot exceed 20 characters' })
    username: string;

    @IsNotEmpty({ message: "There are empty fields. Please complete" })
    @IsEmail({}, { message: 'The email is not valid' })
    email: string;

    @IsNotEmpty({ message: "There are empty fields. Please complete" })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string;

    @IsNotEmpty({ message: "There are empty fields. Please complete" })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    @ValidateIf((o) => o.password === o.confirm, { message: 'Passwords do not match' })
    confirm: string;
}

