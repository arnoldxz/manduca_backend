import { IProduct } from "./product";

export interface IOrder {
    items: IItem[];
    totalQuantity: number;
}

export interface IItem {
    product: IProduct;
    quantity: number;
    totalPrice: number;
}