import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageHistoryDto } from './dto/create-image.dto';

import { HfInference } from '@huggingface/inference'

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  hf = new HfInference(process.env.TOKEN_INTERFACE)

  @Get()
  findAll() {
    return this.imageService.findAll()
     
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateImageHistoryDto) {
    return this.imageService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: CreateImageHistoryDto) {
    return this.imageService.update(id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.imageService.delete(id);
  }
}
