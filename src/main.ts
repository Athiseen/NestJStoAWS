import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.port || 3000;
  app.listen(port, () => {
    console.log('Sever console log.');
  });
}
bootstrap();
