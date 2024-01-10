import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './module/cats.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './controller/health.controller';

@Module({
  imports: [CatsModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
