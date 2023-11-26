import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule, EventModule } from '@kelvin/backend/features';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://127.0.0.1:27017/clientside')
    MongooseModule.forRoot('mongodb+srv://kkflai:c4Z7PPR9WhSVqbVs@clientside-kelvin.6snh4kw.mongodb.net/?retryWrites=true&w=majority')
    ,UserModule, EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})  
export class AppModule {}
