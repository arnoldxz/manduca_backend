import { Body, Controller, Get, Put } from '@nestjs/common';
import { ProductDto, ProductsArrayDto } from 'src/models/dto/product.dto';
import { IProduct } from 'src/models/interfaces/product';
import { Product } from 'src/models/schemas/product.schema';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Put()
  async putProducts(@Body() productsArray: ProductsArrayDto): Promise<Product[]> {
    return this.productsService.createMany(productsArray.products);
  }

  @Get()
  async getProducts(): Promise<Product[]>  {
    return this.productsService.findAll();
  }
    
}
