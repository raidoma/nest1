import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CookieService } from './cookie.service';
import { CreateCookieDto } from './cookie.dto';
import { Cookie } from './cookie.schema';

@Controller('cookie')
export class CookieController {
    constructor(private readonly cookieService: CookieService) { }

    @Post()
    async create(@Body() createCookieDto: CreateCookieDto): Promise<Cookie> {
        return this.cookieService.create(createCookieDto);
    }

    @Get()
    async findAll(): Promise<Cookie[]> {
        return this.cookieService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Cookie | null> {
        return this.cookieService.findOne(id);
    }
}
