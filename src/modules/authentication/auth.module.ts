/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"

// - Keys
import { jwtConstants as jwtKeys } from "./auth.keys"

// - Controllers
import { AuthController } from "./auth.controller"

// - Services
import { AuthService } from "./auth.service"

// - Strategies
import { LocalStrategy } from "./local.strategy"

// - Repositories
import { SequelizeModule } from "@nestjs/sequelize"

// - Models
import { User } from "src/models/User.model"

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtKeys.secret,
      signOptions: {
        expiresIn: "1d"
      }
    }),
    SequelizeModule.forFeature([User]),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
