import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json());
  await app.listen(3000);
}
bootstrap();
{
}
