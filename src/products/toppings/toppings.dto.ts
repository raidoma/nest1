import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateToppingDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    isVegetarian: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isGlutenFree: boolean;

    @IsBoolean()
    @IsNotEmpty()
    hasNuts: boolean;

    @IsNumber()
    @IsNotEmpty()
    calories: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}
