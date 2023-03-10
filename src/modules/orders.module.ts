import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrdersController } from "src/controllers/orders/orders.controller";
import { Order, OrderSchema } from "src/models/schemas/order.schema";
import { OrdersService } from "src/services/orders/orders.service";

// orders.modules
@Module({
    imports: [ MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    controllers: [OrdersController],
    providers: [OrdersService, { provide: Order.name, useValue: OrderSchema }],
    exports: [OrdersService]
})
export class OrdersModule {}