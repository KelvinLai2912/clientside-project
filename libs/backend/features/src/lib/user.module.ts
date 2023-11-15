import { Module } from '@nestjs/common';
import { UserController } from 'libs/backend/features/src/lib/user/user.controller';
import { UserService } from 'libs/backend/features/src/lib/user/user.service';


@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}