import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    id: string;
    
    @Prop()
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    price: number;
    
    @Prop()
    image: string;
    
    @Prop()
    category: string;
    
    @Prop()
    isRecomended: boolean;
    
    @Prop()
    isAvailable: boolean;
    
    @Prop()
    isOnSale: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);