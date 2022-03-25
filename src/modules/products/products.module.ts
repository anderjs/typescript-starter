/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"

// - Controllers
import { ProductsController } from "./products.controller"

// - Services
import { ProductsService } from "./products.services"

// - Models
import { Product } from "src/models/Product.model"


@Module({
  imports: [
    SequelizeModule.forFeature([Product])
  ],
  providers: [
    ProductsService,
  ],
  controllers: [
    ProductsController
  ],
  exports: []
})
export class ProductsModule {}
