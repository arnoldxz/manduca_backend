import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './modules/mongo.module';

//app.module.ts
@Module({
  imports: [
    MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
