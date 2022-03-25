/* eslint-disable prettier/prettier */
import { AutoIncrement, Column, DataType, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id?: number

  @Column(DataType.STRING)
  username: string

  @Column(DataType.STRING)
  email: string

  @Column(DataType.STRING)
  firstName: string

  @Column(DataType.STRING)
  lastName: string

  @Column(DataType.STRING)
  password: string


  @Column(DataType.DATE)
  createdAt: Date

  @Column(DataType.DATE)
  updatedAt: Date
}