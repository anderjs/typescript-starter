/* eslint-disable prettier/prettier */
import { InternalServerErrorException, Controller, Delete, Get, Put } from "@nestjs/common"
import { ProductsService } from "./products.services"

@Controller("products")
export class ProductsController {
  constructor (private readonly service: ProductsService) {}

  @Get("/")
  async getProducts() {
    try {
      const products = await this.service.getProducts();

      return {
        response: {
          products
        },
        message: "Successfully fetched products",
      }
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }

  @Get("/:id")
  async getProduct() {
    
    return {
      product: {}
    }
  }

  @Put("/:id")
  async updateProduct() {
    return {
      product: {}
    }
  }

  @Delete("/:id")
  async deleteProduct() {
    return {
      product: {}
    }
  }
}
