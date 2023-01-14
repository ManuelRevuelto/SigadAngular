import { IsNotEmpty, IsString } from 'class-validator';

export class User {
	@IsNotEmpty()
	@IsString()
	email!: string;

	@IsNotEmpty()
    @IsString()
    password!: string;
}