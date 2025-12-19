import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type ToppingDocument = HydratedDocument<Topping>;

@Schema()
export class Topping {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    isVegetarian: boolean;

    @Prop({ required: true })
    isGlutenFree: boolean;

    @Prop({ required: true })
    hasNuts: boolean;

    @Prop({ required: true })
    calories: number;

    @Prop({ required: true })
    stock: number;
}

export const ToppingSchema = SchemaFactory.createForClass(Topping);
