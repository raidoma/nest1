import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingsController } from './toppings.controller';
import { ToppingsService } from './toppings.service';
import { Topping, ToppingSchema } from './toppings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }]),
  ],
  controllers: [ToppingsController],
  providers: [ToppingsService],
})
export class ToppingsModule { }
