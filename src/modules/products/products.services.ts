/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"

// - Models
import { Product } from "src/models/Product.model"

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private products: typeof Product) {}

  async fetchProducts(): Promise<Product[]> {
    return await this.products.findAll()
  }

  async fetchProduct(id: number): Promise<Product> {
    return await this.products.findOne({ where: { id } })
  }

  async createProduct(product: Partial<Product>): Promise<Product> {
    return await this.products.create(product)
  }

  async updateProduct(id: number, product: Partial<Product>) {
    return await this.products.update(product, { where: { id } })
  }

  async deleteProduct(id: number) {
    return await this.products.destroy({ where: { id } })
  }
}
