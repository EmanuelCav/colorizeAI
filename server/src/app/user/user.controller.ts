import { Controller, Post, Body, Get, UseGuards, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../auth/auth';

import { LoginDto, RegisterDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService, private jwtService: JwtService) { }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {

    const user = await this.userService.register(registerDto)
    const token = this.jwtService.sign({ id: user._id })

    return {
      user,
      token
    }

  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {

    const user = await this.userService.login(loginDto)
    const token = this.jwtService.sign({ id: user._id })

    return {
      user,
      token
    }

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async users() {
    return this.userService.findAll()
  }
}
