import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type CookieDocument = HydratedDocument<Cookie>;

@Schema()
export class Cookie {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    brownSugar: boolean;

    @Prop({ required: true })
    peanuts: boolean;

    @Prop({ required: true })
    stock: number;
}

export const CookieSchema = SchemaFactory.createForClass(Cookie);
