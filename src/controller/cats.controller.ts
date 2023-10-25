import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../service/cats.service';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(`/cats`)
  getCats(): string {
    return this.catsService.getCats();
  }

  @Get('/ping')
  getPong(): string {
    return "pong";
  }
}
