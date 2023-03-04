import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { ProductsProviderService } from '../../services/products-provider/products-provider.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsProviderService: ProductsProviderService) {}

    @Get()
    async getProducts(): Promise<Product[]>  {
      return this.productsProviderService.getProducts();
    }
}
