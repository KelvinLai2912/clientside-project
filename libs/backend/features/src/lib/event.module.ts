import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EventController } from 'libs/backend/features/src/lib/event/event.controller';
import { EventService } from 'libs/backend/features/src/lib/event/event.service';   
import { EventSchema } from './event/event.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
        { name: 'Event', schema: EventSchema }
      ]),
    ],
  controllers: [ EventController],
  providers: [ EventService],
  exports: [ EventService],
})
export class EventModule {}