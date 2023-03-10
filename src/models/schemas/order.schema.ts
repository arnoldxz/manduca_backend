import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Document } from "mongoose";
import { IItem, IOrder } from "../interfaces/order";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order extends Document implements IOrder {
    @Prop()
    id: string;

    @Prop()
    items: IItem[];

    @Prop()
    totalQuantity: number;

    @Prop()
    totalPrice: number;

    @Prop()
    status: string;

    @Prop()
    date: Date;

    @Prop()
    user: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
