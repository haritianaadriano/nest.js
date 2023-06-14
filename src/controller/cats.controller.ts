import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from '../service/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string {
    return this.catsService.getCats();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this return the cat with ${id}`;
  }
}
