import { Injectable } from '@nestjs/common';

@Injectable()
export class CookieService {
    getcookie(){
        return fetch('https://strapi-production-2ff5.up.railway.app/api/cookie-products?populate=*',).then((response) => response.json());
    }
}
// ok
