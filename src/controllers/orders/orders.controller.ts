import { Controller, Post } from '@nestjs/common';
import { OrderDto } from 'src/models/dto/order.dto';
import { OrdersService } from 'src/services/orders/orders.service';

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    async postOrder(orderDto: OrderDto): Promise<OrderDto> {
        console.log(`hello: ${orderDto}`);
        
        return this.ordersService.create(orderDto);
    }
}
