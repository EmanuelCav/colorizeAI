import { Model, Types } from 'mongoose';
import { Readable } from 'stream';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { Image, ImageDocument } from './entities/image.entity';

import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private imageModel: Model<ImageDocument>, private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  async findAll(): Promise<ImageDocument[]> {
    return this.imageModel.find()
  }

  async findOne(id: string): Promise<Image> {
    const item = await this.imageModel.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  async uploadImage(file: Express.Multer.File, input: string, user: Types.ObjectId): Promise<ImageDocument> {

    const result_image: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: this.configService.get<string>('CLOUDINARY_FOLDER') },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )

      const stream = Readable.from(file.buffer)
      stream.pipe(uploadStream)

    })

    const newImage = new this.imageModel({
      isPublic: true,
      isSaved: false,
      input,
      user,
      image: result_image.secure_url,
      imageId: result_image.public_id
    })

    return await newImage.save()

  }

  async update(id: string, updateItemDto: UpdateImageDto): Promise<Image> {
    const updatedItem = await this.imageModel
      .findByIdAndUpdate(id, updateItemDto, { new: true })
      .exec();
    if (!updatedItem) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return updatedItem;
  }

  async delete(id: string): Promise<Image> {
    const deletedItem = await this.imageModel.findByIdAndDelete(id).exec();
    if (!deletedItem) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return deletedItem;
  }
}
