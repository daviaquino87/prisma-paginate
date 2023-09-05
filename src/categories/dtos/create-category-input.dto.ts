import { IsString } from 'class-validator';

export class CreateCategoryInputDto {
  @IsString({ message: 'o campo nome deve ser uma string' })
  name: string;

  @IsString({ message: 'o campo tipo deve ser uma string' })
  type: string;

  @IsString({ message: 'o campo usuário id deve ser uma string' })
  userId: string;
}
