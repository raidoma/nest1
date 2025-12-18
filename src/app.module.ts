import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieController } from './products/cookie/cookie.controller';
import { CookieService } from './products/cookie/cookie.service';
import { ToppingsController } from './products/toppings/toppings.controller';
import { ToppingsService } from './products/toppings/toppings.service';

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
