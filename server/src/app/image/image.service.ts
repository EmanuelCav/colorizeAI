import { Model, Types } from 'mongoose';
import { Readable } from 'stream';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { Image, ImageDocument } from './entities/image.entity';

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
    return this.imageModel.find({ isSaved: true, isPublic: true }).populate({
      path: "user",
      select: "-password"
    })
  }

  async findHistory(id: Types.ObjectId): Promise<ImageDocument[]> {
    return this.imageModel.find({ user: id })
  }

  async findDashboard(id: Types.ObjectId): Promise<ImageDocument[]> {
    return this.imageModel.find({ user: id, isSaved: true })
  }

  async findImage(id: string): Promise<ImageDocument> {
    const image = await this.imageModel.findById(id).populate({
      path: "user",
      select: "-password"
    });

    if (!image) {
      throw new NotFoundException(`Image does not exists`);
    }

    return image;
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

  async saveImage(save: boolean, id: string, userId: Types.ObjectId): Promise<ImageDocument> {

    const image = await this.imageModel.findById(id)

    if (!image) {
      throw new BadRequestException('Image does not exists')
    }

    if (image.user !== userId) {
      throw new UnauthorizedException('You cannot save this image')
    }

    const imageUpadted = await this.imageModel.findByIdAndUpdate(id, {
      isSaved: save
    }, {
      new: true
    })

    return imageUpadted
  }
}
