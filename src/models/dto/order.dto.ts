import { IOrder } from "../interfaces/order";
import { ApiProperty } from "@nestjs/swagger";
import { IItem } from "../interfaces/item";

export class OrderDto implements IOrder {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    items: IItem[];
    
    @ApiProperty()
    totalQuantity: number;
    
    @ApiProperty()
    totalPrice: number;
    
    @ApiProperty()
    status: string;
    
    @ApiProperty()
    date: Date;
    
    @ApiProperty()
    user: string;
}