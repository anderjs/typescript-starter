/* eslint-disable prettier/prettier */
import {
  InternalServerErrorException,
  Controller,
  Delete,
  Get,
  Put,
  Param,
  NotFoundException,
  Post,
  Body,
  UseGuards
} from "@nestjs/common"

// - DTOs
import { ProductDTO } from "src/validation/product/product.dto"

// - Services
import { ProductsService } from "./products.services"

// - Guards
import { JwtAuthGuard } from "../authentication/jwt.auth.guard"



@Controller("products")
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts() {
    try {
      const products = await this.service.fetchProducts()

      return {
        response: {
          products
        },
        message: "Successfully fetched products"
      }
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  async getProduct(@Param() params) {
    const { id }: { id: number } = params

    const product = await this.service.fetchProduct(id)

    if (product) {
      return {
        response: {
          product
        }
      }
    }

    throw new NotFoundException("Product Not Found")
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduct(@Body() product: ProductDTO) {
    try {
      const createdProduct = await this.service.createProduct({
        brand: product.brand,
        name: product.name,
        price: product.price,
        sku: product.sku,
        image: product.image
      })

      return {
        response: {
          product: createdProduct
        },
        message: "Successfully created product"
      }
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  async updateProduct(@Body() product: ProductDTO, @Param() params) {
    try {
      const { id }: { id: number } = params

      const updatedProduct = await this.service.updateProduct(id, product)

      return {
        response: {
          product: updatedProduct
        }
      }
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  async deleteProduct(@Param() params) {
    try {
      const { id }: { id: number } = params
      
      const deletedProduct = await this.service.deleteProduct(id)

      return {
        response: {
          product: deletedProduct
        }
      }
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }
}
