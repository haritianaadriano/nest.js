import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controller/cats.controller';
import { S3Controller } from './controller/s3.controller';
import { CatsService } from './service/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, S3Controller],
  providers: [AppService, CatsService],
})
export class AppModule {}
