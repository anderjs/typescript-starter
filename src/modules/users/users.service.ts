/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

// - Models
import { User } from "src/models/User.model";

@Injectable()
export class UsersService {
  constructor (@InjectModel(User) private users: typeof User) {}
}