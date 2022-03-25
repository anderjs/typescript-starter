/* eslint-disable prettier/prettier */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe
} from "@nestjs/common"
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize"
import { APP_PIPE } from "@nestjs/core";


// - Cors
import cors from 'cors';

// - Files
import configuration from './config';

// - Modules
import { AuthModule as AuthenticationModule } from "./modules/authentication/auth.module";
import { ProductsModule as ProductModule } from "./modules/products/products.module";
import { UsersModule as UserModule } from "./modules/users/users.module";

// - Models
import { User } from "./models/User.model";
import { Product } from "./models/Product.model";

// - Keys
import { jwtConstants } from "./modules/authentication/auth.keys";

/**
 * @description
 * This module is responsible for configuration.
 */
const config = configuration();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: config.database.host,
      port: config.database.port,
      database: config.database.database,
      username: config.database.username,
      password: config.database.password,
      autoLoadModels: true,
      synchronize: true,
      models: [
        User,
        Product
      ]
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [configuration]
    }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: jwtConstants.secret || "secret",
        signOptions: {
          expiresIn: '1d'
        }
      })
    }),
    AuthenticationModule,
    ProductModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ]
})
export class AppModule {}