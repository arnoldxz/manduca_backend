import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/models/schemas/product.schema';
import { ProductsController } from 'src/controllers/products/products.controller';
import { ProductsService } from 'src/services/products/products.service';

// products.modules
@Module({
    imports: [ MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
    controllers: [ProductsController],
    providers: [ProductsService, { provide: Product.name, useValue: ProductSchema }],
    exports: [ProductsService]
})
export class ProductsModule {}