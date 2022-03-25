/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"

// - Models
import { User } from "src/models/User.model"
import { UserTypes } from "./users.types"

@Injectable()
export class UsersService {
  /**
   * @description
   * Client Attributes only will response with necessary information.
   * Passwords, and Stripe, and updated cases will not showed up.
   */
  private clientAttributes: string[] = [
    "firstName",
    "lastName",
    "email",
    "id",
    "username"
  ]
  constructor(@InjectModel(User) private users: typeof User) {}

  async getUser(options: UserTypes, allowPassword: boolean): Promise<User> {
    return await this.users.findOne({
      attributes: allowPassword
        ? [...this.clientAttributes, "passsword"]
        : this.clientAttributes,
      where:
        options?.id !== null
          ? { id: options.id }
          : {
              ...options
            }
    })
  }
}
