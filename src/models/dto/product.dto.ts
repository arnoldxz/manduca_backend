import { ApiProperty } from "@nestjs/swagger";
import { IProduct } from "../interfaces/product";

export class ProductDto implements IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isRecomended: boolean;
    isAvailable: boolean;
    isOnSale: boolean;
}

export class ProductsArrayDto {
    @ApiProperty({
      type: [ProductDto],
    })
    products: ProductDto[];
  }