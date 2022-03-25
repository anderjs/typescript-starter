/* eslint-disable prettier/prettier */
import { User } from "src/models/User.model";

export const UserProvider = [
  {
    provide: "UserRepository",
    useValue: User
  }
];