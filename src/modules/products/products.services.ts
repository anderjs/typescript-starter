/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize';

// - Models
import { Product } from 'src/models/Product.model';

@Injectable()
export class ProductsService {
  constructor (@InjectModel(Product) private products: typeof Product) {}

  async getProducts(): Promise<Product[]> {
    return await this.products.findAll();
  }
}