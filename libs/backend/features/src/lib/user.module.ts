import { Module } from '@nestjs/common';
import { UserController } from 'libs/backend/features/src/lib/user/user.controller';
import { UserService } from 'libs/backend/features/src/lib/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/user.schema';


import { EventController } from 'libs/backend/features/src/lib/event/event.controller';
import { EventService } from 'libs/backend/features/src/lib/event/event.service';   
import { EventSchema } from './event/event.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
        { name: 'User', schema: UserSchema },
        { name: 'Event', schema: EventSchema }
      ]),
    ],
  controllers: [UserController, EventController],
  providers: [UserService, EventService],
  exports: [UserService, EventService],
})
export class UserModule {}