import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cookie } from './cookie.schema';
import { CreateCookieDto } from './cookie.dto';

@Injectable()
export class CookieService {
    constructor(@InjectModel(Cookie.name) private cookieModel: Model<Cookie>) { }

    async create(createCookieDto: CreateCookieDto): Promise<Cookie> {
        const createdCookie = new this.cookieModel(createCookieDto);
        return createdCookie.save();
    }

    async findAll(): Promise<Cookie[]> {
        return this.cookieModel.find().exec();
    }

    async findOne(id: string): Promise<Cookie | null> {
        return this.cookieModel.findById(id).exec();
    }
}
