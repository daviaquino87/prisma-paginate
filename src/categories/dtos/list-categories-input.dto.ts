import { IsNumber, IsOptional } from 'class-validator';

export class ListCategoriesInputDto {
  @IsNumber()
  @IsOptional()
  page?: number;

  @IsNumber()
  @IsOptional()
  perPage?: number;
}
