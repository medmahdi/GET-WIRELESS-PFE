
import { Injectable, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, CreateUserDto } from 'src/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService implements OnModuleInit {

	onModuleInit() {
		this.createDefaultAdmin()
  }
  
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly userModel: Model<User>
  ) { }

  async createDefaultAdmin(){
    const user = await this.userModel.findOne({ username: "admin" });
    if (!user) {
      let body = {
        "username":"admin",
        "firstname":"Mohamed",
        "lastname":"Mehdi",
        "phone":"1122334455",
        "email":"admin@gmail.com",
        "status":true,
        "roles":["admin"],
        "password":"admin",
      }
      const newUser = await this.userModel(body);
      console.log("newUser : ",newUser)
      return newUser.save();
    }

  }
  
  

  async getFullProfil(user) {
    const userId = user._id
    const result =  await this.userModel.aggregate([
      {
        '$match': {
          '_id': Types.ObjectId(userId)
        }
      },
      {
        '$addFields': {
          'objDepartmentId': '$departmentId'
        }
      }, 
      {
        '$lookup': {
          'from': 'departments',
          'localField': 'objDepartmentId',
          'foreignField': '_id',
          'as': 'department'
        }
      },
      {
        '$unwind': {
          'path': '$department'
        }
      },
      {
        '$project': {
          'password': 0,
        }
      },
    ])

    return result[0]
  }

  async validateUserMongo(usern: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username: usern });
    const match = await bcrypt.compare(pass, user.password);
    debugger
    if (user && match && user.status) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // post a single user
  async create(createUserDTO: any): Promise<User> {
    const newUser = await this.userModel(createUserDTO);
    return newUser.save();
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username,email: user.email, sub: user._id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getHelloAdmin() {
    return "You are in the admin panel"
  }
}


