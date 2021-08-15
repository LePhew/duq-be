import { Module } from '@nestjs/common';
import { FichaService } from './ficha.service';
import { FichaController } from './ficha.controller';

@Module({
  providers: [FichaService],
  controllers: [FichaController]
})
export class FichaModule {}
