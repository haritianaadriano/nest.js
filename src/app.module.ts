import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';
import { S3Service } from './service/s3.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, S3Service],
})
export class AppModule {}
