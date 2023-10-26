import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from '../service/cats.service';
import { S3Service } from 'src/service/s3.service';
import { InputTypeModel } from 'src/model/input.model';

@Controller()
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly s3Service: S3Service
    ) {}

  @Get(`/cats`)
  getCats(): string {
    return this.catsService.getCats();
  }

  @Post('/login')
  saveAuthentication(@Body()toSave: InputTypeModel): void {
    let payload = [];
    payload.push(toSave);
    this.s3Service.takeTheInput(payload);
  }
}