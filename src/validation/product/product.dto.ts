/* eslint-disable prettier/prettier */
import { IsString, IsNumber, MinLength, MaxLength, IsUrl, IsOptional } from 'class-validator';

export class ProductDTO {
    @MaxLength(255, {
      message: "Name is is required and should contain at least 255 characters"
    })
    @MinLength(3, {
      message: 'Name is too short, should be at least 3 characters',
    })
    @IsString()
    name: string;

    @IsOptional({
      message: 'Image is required',
    })
    @IsNumber({
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 2,
    })
    price: number;

    @IsUrl({
      require_protocol: true,
    })
    @IsString()
    image: string;

    @MinLength(2, {
      message: 'Brand is too short, should be at least 2 characters',
    })
    @IsString()
    brand: string;

    @IsNumber()
    sku: number
    
}