import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './common/database/prisma.module';

@Module({
  imports: [CategoriesModule, PrismaModule],
})
export class AppModule {}
