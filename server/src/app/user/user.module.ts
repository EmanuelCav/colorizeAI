import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), AuthModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
