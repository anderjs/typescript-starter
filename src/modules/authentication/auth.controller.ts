/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards
} from "@nestjs/common"


import { AuthService } from "./auth.service"

// - DTOs
import { LoginDto } from "src/validation/login/login.dto"
import { LocalAuthGuard } from "./local.auth.guard";

@Controller("authentication")
export class AuthController {
  constructor(
    private readonly service: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Body() user: LoginDto) {
    try {
      const token = await this.service.authenticate(user.email, user.password)

      return {
        message: "Successfully logged in",
        response: {
          token
        },
        statusCode: 200
      }
    } catch (err) {
      throw new BadRequestException(err.message)
    }
  }
}
