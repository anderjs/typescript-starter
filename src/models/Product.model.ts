/* eslint-disable prettier/prettier */
import { AutoIncrement, Column, DataType, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  image: string

  @Column(DataType.FLOAT)
  price: number

  @Column(DataType.STRING)
  brand: string

  @Column(DataType.INTEGER)
  sku: number

  @Column(DataType.DATE)
  createdAt: Date

  @Column(DataType.DATE)
  updatedAt: Date
}