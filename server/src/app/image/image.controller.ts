import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile, UseGuards, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ImageService } from './image.service';

import { CreateImageHistoryDto } from './dto/create-image.dto';

import { JwtAuthGuard } from '../auth/auth';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Get("explore")
  findAll() {
    return this.imageService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Req() req: any, @Body() body: any, @Body("inputs") inputs: string, @UploadedFile() file: Express.Multer.File) {
    return this.imageService.uploadImage(file, inputs, req.user.id.id);
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
