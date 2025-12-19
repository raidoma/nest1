import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CookieController } from './cookie.controller';
import { CookieService } from './cookie.service';
import { Cookie, CookieSchema } from './cookie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cookie.name, schema: CookieSchema }]),
  ],
  controllers: [CookieController],
  providers: [CookieService],
})
export class CookieModule { }
