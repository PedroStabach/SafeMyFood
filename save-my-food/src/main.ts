import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}

=======
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(process.env.PORT ?? 3000);
}
>>>>>>> development
bootstrap();
