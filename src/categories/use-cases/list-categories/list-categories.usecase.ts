import { Injectable } from '@nestjs/common';
import { CategoryOutputDto } from 'src/categories/dtos/category-output.dto';
import { ListCategoriesInputDto } from 'src/categories/dtos/list-categories-input.dto';
import { CategoriesRepository } from 'src/categories/repositories/categories.repository';
import { PaginatedOutputDto } from 'src/common/dtos/paginated-output.dto';

interface IListCategoriesUseCaseInput {
  listCategoriesInputDto: ListCategoriesInputDto;
}

interface IListCategoriesUseCaseOutput {
  categoriesOutputDto: PaginatedOutputDto<CategoryOutputDto>;
}

@Injectable()
export class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute({
    listCategoriesInputDto,
  }: IListCategoriesUseCaseInput): Promise<IListCategoriesUseCaseOutput> {
    const categories = await this.categoriesRepository.find(
      listCategoriesInputDto,
    );

    return {
      categoriesOutputDto: categories,
    };
  }
}
