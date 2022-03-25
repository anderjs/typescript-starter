/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"

// - Keys
import { jwtConstants as jwtKeys } from "./auth.keys"

// - Services
import { AuthService } from "./auth.service"

// - Providers
import { UserProvider } from "../users/users.provider"

// - Strategies
import { LocalStrategy } from "./local.strategy"
import { JwtStrategy } from "./jwt.strategy"

// - Controllers
import { AuthController } from "./auth.controller"

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtKeys.secret,
      signOptions: {
        expiresIn: "1d"
      }
    })
  ],
  providers: [...UserProvider, AuthService, LocalStrategy, JwtStrategy],
  exports: [...UserProvider, AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
