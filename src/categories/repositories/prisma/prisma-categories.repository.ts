import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginator } from 'prisma-pagination';
import { CategoryOutputDto } from 'src/categories/dtos/category-output.dto';
import { ICategoryProps } from 'src/categories/interfaces/category-props.interface';
import { IFindCategoriesFilters } from 'src/categories/interfaces/find-categories-filters.interface';
import { CategoriesRepository } from 'src/categories/repositories/categories.repository';
import { PrismaService } from 'src/common/database/prisma.service';
import { PaginatedOutputDto } from 'src/common/dtos/paginated-output.dto';

@Injectable()
export class PrismaCategoriesRepository implements CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly prismaCategories = this.prismaService.categories;

  async create(category: ICategoryProps): Promise<void> {
    await this.prismaCategories.create({
      data: {
        id: category.id,
        name: category.name,
        createdAt: category.createdAt,
      },
    });
  }

  async find(
    filters: IFindCategoriesFilters,
  ): Promise<PaginatedOutputDto<CategoryOutputDto>> {
    const paginate = createPaginator({ perPage: filters.perPage ?? 10 });

    return paginate<CategoryOutputDto, Prisma.CategoriesFindManyArgs>(
      this.prismaCategories,
      {
        where: {},
        orderBy: {
          id: 'desc',
        },
      },
      {
        page: filters.page ?? 1,
      },
    );
  }
}
