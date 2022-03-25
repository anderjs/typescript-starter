/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"

import { Product } from "src/models/Product.model"

// - Services
import { ProductsService } from "./products.services"

// - Providers
import { ProductProvider } from "./products.provider"

// - Controllers
import { ProductsController } from "./products.controller"

const Provider = SequelizeModule.forFeature([Product])

@Module({
  imports: [Provider],
  exports: [...ProductProvider, Provider, ProductsService],
  providers: [...ProductProvider, ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
