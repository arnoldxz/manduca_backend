import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsProviderService } from './services/products-provider/products-provider.service';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService,ProductsProviderService],
})
export class AppModule {}
