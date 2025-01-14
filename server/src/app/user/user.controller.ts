import { Controller, Post, Body, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';

import { LoginDto, RegisterDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService, private jwtService: JwtService) { }

  @Get('welcome')
  async welcomeMessage() {
    await this.userService.welcome()

    return { message: 'Email sent successfully!' }
  }

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

}
