import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './entities/image.entity';
import { CreateImageHistoryDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private imageModel: Model<ImageDocument>) { }

  async findAll(): Promise<Image[]> {
    return this.imageModel.find() 
  }

  async findOne(id: string): Promise<Image> {
    const item = await this.imageModel.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  async create(createItemDto: CreateImageHistoryDto): Promise<Image> {
    const newItem = new this.imageModel(createItemDto);
    return newItem.save();
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
