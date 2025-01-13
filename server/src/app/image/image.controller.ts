import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile, UseGuards, Req, Patch } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ImageService } from './image.service';

import { CreateImageHistoryDto } from './dto/create-image.dto';

import { JwtAuthGuard } from '../auth/auth';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Get("explore")
  explore() {
    return this.imageService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get("history")
  history(@Req() req: any) {
    return this.imageService.findHistory(req.user.id.id)
  }

  @UseGuards(JwtAuthGuard)
  @Get("dashboard")
  dashboard(@Req() req: any) {
    return this.imageService.findDashboard(req.user.id.id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Req() req: any, @Body("inputs") inputs: string, @UploadedFile() file: Express.Multer.File) {
    return this.imageService.uploadImage(file, inputs, req.user.id.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async save(@Req() req: any, @Param('id') id: string) {
    const image = await this.imageService.saveImage(id, req.user.id.id);

    return {
      image,
      message: "Image saved successfully"
    }
    
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
