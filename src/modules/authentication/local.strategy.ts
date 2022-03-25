/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { Strategy } from "passport-local"
import { PassportStrategy } from "@nestjs/passport"

/**
 * @see https://docs.nestjs.com/techniques/authentication
 */

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      usernameField: "email",
      passwordField: "password"
    })
  }
}
