/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"

// - Models
import { User } from 'src/models/User.model';

// - Services
import { UsersService } from './users.service';

// - Providers
import { UserProvider } from './users.provider';

// - Controllers
import { UsersController } from './users.controller';

const Provider = SequelizeModule.forFeature([User]);

@Module({
  exports: [
    ...UserProvider,
    Provider
  ],
  imports: [
    Provider
  ],
  providers: [
    ...UserProvider,
    UsersService
  ],
  controllers: [
    UsersController
  ],
})
export class UsersModule {}