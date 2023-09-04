import { Module } from '@nestjs/common';
import { CategoriesController } from 'src/categories/controllers/categories.controller';
import { CategoriesRepository } from 'src/categories/repositories/categories.repository';
import { PrismaCategoriesRepository } from 'src/categories/repositories/prisma/prisma-categories.repository';
import { CreateCategoryUseCase } from 'src/categories/use-cases/create-category/create-category.usecase';
import { ListCategoriesUseCase } from 'src/categories/use-cases/list-categories/list-categories.usecase';

@Module({
  providers: [
    {
      provide: CategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
    CreateCategoryUseCase,
    ListCategoriesUseCase,
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
