import { IsString } from 'class-validator';

export class CreateCategoryInputDto {
  @IsString({ message: 'o compo nome deve ser uma string' })
  name: string;
}
