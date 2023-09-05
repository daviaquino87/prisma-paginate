import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CategoryOutputDto } from 'src/categories/dtos/category-output.dto';
import { CreateCategoryInputDto } from 'src/categories/dtos/create-category-input.dto';
import { ICategoryProps } from 'src/categories/interfaces/category-props.interface';
import { CategoriesRepository } from 'src/categories/repositories/categories.repository';

interface ICreateCategoryUseCaseInput {
  createCategoryInputDto: CreateCategoryInputDto;
}

interface ICreateCategoryUseCaseOutput {
  categoryOutputDto: CategoryOutputDto;
}

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute({
    createCategoryInputDto,
  }: ICreateCategoryUseCaseInput): Promise<ICreateCategoryUseCaseOutput> {
    const category: ICategoryProps = {
      id: randomUUID(),
      name: createCategoryInputDto.name,
      type: createCategoryInputDto.type,
      userId: createCategoryInputDto.userId,
      createdAt: new Date(),
    };

    await this.categoriesRepository.create(category);

    return {
      categoryOutputDto: {
        id: category.id,
        name: category.name,
        type: category.type,
        userId: category.userId,
        createdAt: category.createdAt,
      },
    };
  }
}
