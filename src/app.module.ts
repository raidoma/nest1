import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieModule } from './products/cookie/cookie.module';
import { ToppingsModule } from './products/toppings/toppings.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:cookieroot@localhost:27017/nest-chacras-opener?authSource=admin',
    ),
    OrderModule,
    CookieModule,
    ToppingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
