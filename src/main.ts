import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/secrets/cert.key'),
    cert: fs.readFileSync(__dirname + '/secrets/cert.cer')
  }
  const app = await NestFactory.create(AppModule, { httpsOptions });
  const port = 3000;
  app.enableCors({ origin: "*" });
  await app.listen(port);
}
bootstrap();
