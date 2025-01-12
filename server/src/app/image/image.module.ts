import { memoryStorage } from 'multer';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageService } from './image.service';
import { ImageController } from './image.controller';

import { Image, ImageSchema } from './entities/image.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  MulterModule.register({
    storage: memoryStorage(),
  })],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule { }
