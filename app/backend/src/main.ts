import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  dotenv.config();
  await app.listen(8080);
}
bootstrap();
