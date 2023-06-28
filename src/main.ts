import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configSerivce = app.get(ConfigService);
  await app.listen(configSerivce.get('PORT') || 3000);
}
dotenv.config();
bootstrap();
