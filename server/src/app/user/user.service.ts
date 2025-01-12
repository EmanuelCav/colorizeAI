import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './entities/user.entity';

import { LoginDto, RegisterDto } from './dto/create-user.dto';

import { comparePassword, hashPassword } from './utils/encrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async register(registerData: RegisterDto): Promise<UserDocument> {

    const user = await this.userModel.findOne({ email: registerData.email })

    if (user) {
      throw new BadRequestException('A user with that email address already exists')
    }

    const userName = await this.userModel.findOne({ username: registerData.username })

    if (userName) {
      throw new BadRequestException('A user with that username already exists')
    }

    const hashedPassword = await hashPassword(registerData.password)    

    const newUser = new this.userModel({
      username: registerData.username,
      email: registerData.email,
      password: hashedPassword
    })

    return await newUser.save();
  }

  async login(loginData: LoginDto): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email: loginData.email })

    if (!user) {
      throw new BadRequestException('Fields do not match')
    }

    const verifyPassword = await comparePassword(loginData.password, user.password)

    if (!verifyPassword) {
      throw new BadRequestException('Fields do not match')
    }

    return user

  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().select('-password')
  }

}
