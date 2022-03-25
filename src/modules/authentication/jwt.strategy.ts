/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { jwtConstants as jwtKeys } from './auth.keys'

/**
 * @see https://docs.nestjs.com/techniques/authentication
 */

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtKeys.secret
    })
      }

  async validate (payload: { id: string, email: string }) {
    console.log(payload);

    return {
      id: payload.id,
      email: payload.email
    }
  }
}