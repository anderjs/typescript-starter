/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import bcrypt from "bcrypt"

// - Services

// - Models
import { User } from "src/models/User.model"
import { InjectModel } from "@nestjs/sequelize"

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    @InjectModel(User) private readonly user: typeof User
  ) {}

  async authenticate(email: string, password: string): Promise<User> {
    try {
      const user = await this.user.findOne({
        where: {
          email,
          password
        }
      });

      if (user?.password || user?.email) {
        /**
         * @description
         * If user is not found, return null.
         */
        const hashValidateSync = bcrypt.compareSync(password, user.password)

        if (hashValidateSync) {
          delete user.password

          const token = this.jwt.sign(user)

          return Object.assign(user, { token })
        }
      }

      throw new Error("Invalid credentials")
    } catch (err) {
      throw err
    }
  }
}
