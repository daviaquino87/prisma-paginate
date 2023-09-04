import { ApiProperty } from '@nestjs/swagger';

export class CategoryOutputDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  createdAt: Date;
}
