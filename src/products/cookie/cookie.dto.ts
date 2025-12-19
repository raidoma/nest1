import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCookieDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    brownSugar: boolean;

    @IsBoolean()
    @IsNotEmpty()
    peanuts: boolean;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}
