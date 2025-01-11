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
      throw new BadRequestException('Ya existe un usuario con esa dirección de correo electrónico')
    }

    const hashedPassword = await hashPassword(registerData.password)

    const newUser = new this.userModel({
      username: registerData.username,
      email: registerData.email,
      password: hashedPassword
    })

    return newUser.save();
  }

  async login(loginData: LoginDto): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email: loginData.email })

    if (!user) {
      throw new BadRequestException('Los campos no coinciden')
    }

    const verifyPassword = await comparePassword(loginData.password, user.password)

    if (!verifyPassword) {
      throw new BadRequestException('Los campos no coinciden')
    }

    return user

  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().select('-password')
  }

}
