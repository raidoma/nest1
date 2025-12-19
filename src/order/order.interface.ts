import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

export class CustomerDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    zip: string;

    @IsString()
    @IsNotEmpty()
    country: string;
}

export class ProductConnectDto {
    @IsArray()
    @IsString({ each: true })
    connect: string[];
}

export class ProductQuantityItemDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}

export class ProductsQuantityDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductQuantityItemDto)
    data: ProductQuantityItemDto[];
}

export class CreateOrderDto {
    @IsDefined()
    @ValidateNested()
    @Type(() => CustomerDto)
    customer: CustomerDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => ProductConnectDto)
    products: ProductConnectDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => ProductsQuantityDto)
    productsQuantity: ProductsQuantityDto;

    @IsNumber()
    @IsNotEmpty()
    total: number;
}
