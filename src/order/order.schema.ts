import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Customer {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    zip: string;

    @Prop({ required: true })
    country: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

@Schema()
export class ProductConnect {
    @Prop({ type: [String], required: true })
    connect: string[];
}

export const ProductConnectSchema = SchemaFactory.createForClass(ProductConnect);

@Schema()
export class ProductQuantityItem {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    quantity: number;
}

export const ProductQuantityItemSchema = SchemaFactory.createForClass(ProductQuantityItem);

@Schema()
export class ProductsQuantity {
    @Prop({ type: [ProductQuantityItemSchema], required: true })
    data: ProductQuantityItem[];
}

export const ProductsQuantitySchema = SchemaFactory.createForClass(ProductsQuantity);

@Schema()
export class Order {
    @Prop({ type: CustomerSchema, required: true })
    customer: Customer;

    @Prop({ type: ProductConnectSchema, required: true })
    products: ProductConnect;

    @Prop({ type: ProductsQuantitySchema, required: true })
    productsQuantity: ProductsQuantity;

    @Prop({ required: true })
    total: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
