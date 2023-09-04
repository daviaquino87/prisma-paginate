import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryOutputDto } from 'src/categories/dtos/category-output.dto';
import { CreateCategoryInputDto } from 'src/categories/dtos/create-category-input.dto';
import { ListCategoriesInputDto } from 'src/categories/dtos/list-categories-input.dto';
import { CreateCategoryUseCase } from 'src/categories/use-cases/create-category/create-category.usecase';
import { ListCategoriesUseCase } from 'src/categories/use-cases/list-categories/list-categories.usecase';
import { ApiPaginatedResponse } from 'src/common/decorators/api-paginated-response.decorator';
import { PaginatedOutputDto } from 'src/common/dtos/paginated-output.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly listCategoryUseCase: ListCategoriesUseCase,
  ) {}

  @Post()
  async create(
    @Body() createCategoryInputDto: CreateCategoryInputDto,
  ): Promise<CategoryOutputDto> {
    const { categoryOutputDto } = await this.createCategoryUseCase.execute({
      createCategoryInputDto,
    });

    return categoryOutputDto;
  }

  @Get()
  @ApiPaginatedResponse(CategoryOutputDto)
  async index(
    @Query() listCategoriesInputDto: ListCategoriesInputDto,
  ): Promise<PaginatedOutputDto<CategoryOutputDto>> {
    const { categoriesOutputDto } = await this.listCategoryUseCase.execute({
      listCategoriesInputDto,
    });

    return categoriesOutputDto;
  }
}
