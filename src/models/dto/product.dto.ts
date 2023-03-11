import { ApiProperty } from "@nestjs/swagger";
import { IProduct } from "../interfaces/product";


export class ProductDto implements IProduct {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  isRecomended: boolean;

  @ApiProperty()
  isAvailable: boolean;

  @ApiProperty()
  isOnSale: boolean;
}

export class ProductsArrayDto {
    @ApiProperty({
      type: [ProductDto],
    })
    products: ProductDto[];
  }