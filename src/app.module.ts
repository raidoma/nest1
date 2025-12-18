import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieController } from './producrs//cookie/cookie.controller';
import { CookieService } from './producrs//cookie/cookie.service';
import { ToppingsController } from './producrs//toppings/toppings.controller';
import { ToppingsService } from './producrs//toppings/toppings.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:cookieroot@localhost:27017/nest-chacras-opener?authSource=admin',
    ),
  ],
  controllers: [AppController, CookieController, ToppingsController],
  providers: [AppService, CookieService, ToppingsService],
})
export class AppModule {}
