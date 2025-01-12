import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [`${process.env.URL_PRODUCTION}`, `${process.env.URL_DEVELOPMENT}`]
  })
  await app.listen(process.env.PORT);
}
bootstrap();
