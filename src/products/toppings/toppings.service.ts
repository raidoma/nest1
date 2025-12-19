import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topping } from './toppings.schema';
import { CreateToppingDto } from './toppings.dto';

@Injectable()
export class ToppingsService {
    constructor(@InjectModel(Topping.name) private toppingModel: Model<Topping>) { }

    async create(createToppingDto: CreateToppingDto): Promise<Topping> {
        const createdTopping = new this.toppingModel(createToppingDto);
        return createdTopping.save();
    }

    async findAll(): Promise<Topping[]> {
        return this.toppingModel.find().exec();
    }

    async findOne(id: string): Promise<Topping | null> {
        return this.toppingModel.findById(id).exec();
    }
}
