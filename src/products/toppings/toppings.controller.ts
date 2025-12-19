import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { CreateToppingDto } from './toppings.dto';
import { Topping } from './toppings.schema';

@Controller('toppings')
export class ToppingsController {
    constructor(private readonly toppingsService: ToppingsService) { }

    @Post()
    async create(@Body() createToppingDto: CreateToppingDto): Promise<Topping> {
        return this.toppingsService.create(createToppingDto);
    }

    @Get()
    async findAll(): Promise<Topping[]> {
        return this.toppingsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Topping | null> {
        return this.toppingsService.findOne(id);
    }
}
