/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class LoginDto {
  /**
   * @description
   * Email validation.
   */

  @IsEmail()
  @IsNotEmpty({
    message: "Email is required"
  })
  @MaxLength(255, {
    message: "Email is is required and should contain at least 255 characters"
  })
  email: string

  /**
   * @description
   * Password validation.
   */

  @IsNotEmpty({
    message: "Password is required"
  })
  @MinLength(5, {
    message: "Password is not strong, should be at least 5 characters"
  })
  password: string
}
