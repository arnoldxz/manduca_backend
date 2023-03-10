import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from 'src/models/dto/order.dto';
import { IOrder } from 'src/models/interfaces/order';
import { Order, OrderDocument } from 'src/models/schemas/order.schema';

@Injectable()
export class OrdersService {
    
        constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}
    
        async create(order: OrderDto): Promise<Order> {
            return await this.orderModel.create(order);
        }
}
