import { IItem, IOrder } from "../interfaces/order";

export class OrderDto implements IOrder {
    id: string;
    items: IItem[];
    totalQuantity: number;
    totalPrice: number;
    status: string;
    date: Date;
    user: string;
}