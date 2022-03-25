/* eslint-disable prettier/prettier */
import { Product } from "src/models/Product.model";

export const ProductProvider = [
  {
    provide: "ProductRepository",
    useValue: Product
  }
];