import { User, CreateUserDto } from "../models/user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    // fetch all users
    async getAllUser(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getAllUserDto(): Promise<any> {
        const users = await this.userModel.aggregate([
            {
                '$project' : {
                    password : 0
                }
            }
        ]);
        return users;
    }
    // Get a single user
    async getUser(id): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        return user;
    }

    // Check if user exists
    async UserExists(id): Promise<boolean> {
        const user = await this.userModel.findById(id).exec();
        return user==null?false:true;
    }

    // post a single user
    async addUser(createUserDTO: CreateUserDto): Promise<User> {
        const newUser = await this.userModel(createUserDTO);
        return newUser.save();
    }
    // Edit user details
    async updateUser(id, createUserDTO: any): Promise<User> {
        const updatedUser = await this.userModel
            .findByIdAndUpdate(id, createUserDTO, { new: true });
        return updatedUser;
    }
    // Activate user status
    async activateStatus(id): Promise<User> {
        const updatedUser = await this.userModel
            .findByIdAndUpdate(id, {status : true}, { new: true });
        return updatedUser;
    }
    // Deactivate user status
    async deactivateStatus(id): Promise<User> {
        const updatedUser = await this.userModel
            .findByIdAndUpdate(id, {status : false}, { new: true });
        return updatedUser;
    }
    // Delete a user
    async deleteUser(id): Promise<any> {
        const deletedUser = await this.userModel.findByIdAndRemove(id);
        return deletedUser;
    }

}