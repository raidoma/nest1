import { Injectable } from '@nestjs/common';

@Injectable()
export class ToppingsService {
    getToppings(){
        return fetch('https://strapi-production-2ff5.up.railway.app/api/topping-products?populate=*',).then((response) => response.json());
    }
}
