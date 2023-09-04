import { CategoryOutputDto } from 'src/categories/dtos/category-output.dto';
import { ICategoryProps } from 'src/categories/interfaces/category-props.interface';
import { IFindCategoriesFilters } from 'src/categories/interfaces/find-categories-filters.interface';
import { PaginatedOutputDto } from 'src/common/dtos/paginated-output.dto';

export abstract class CategoriesRepository {
  abstract create(category: ICategoryProps): Promise<void>;
  abstract find(
    filters: IFindCategoriesFilters,
  ): Promise<PaginatedOutputDto<CategoryOutputDto>>;
}
