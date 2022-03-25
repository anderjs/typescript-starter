/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { compareSync } from "bcrypt"

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

  async authenticate(email: string, password: string): Promise<string> {
    try {
      const user = await this.user.findOne({
        where: {
          email
        }
      })

      if (user?.password || user?.email) {
        /**
         * @description
         * If user is not found, return null.
         */
        const hashValidateSync = compareSync(password, user.password)

        if (hashValidateSync) {
          /**
           * @description
           * If user is found, return user.
           */
          const token = this.jwt.sign({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id
          })

          /**
           * @description
           * Applying token to user and remove password.
           */
          return token;
        }
      }

      throw new Error("Invalid credentials")
    } catch (err) {
      throw err
    }
  }
}
