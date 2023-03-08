import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from "./products.modules";
import * as dotenv from 'dotenv';

//mongo.module.ts
dotenv.config({path: 'environment//.env.dev'});
console.log(process.env.MONGODB_CONNECTION_STRING)
@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING), 
        ProductsModule,],
    exports: [ MongooseModule, ProductsModule ],
})

export class MongoModule {}

