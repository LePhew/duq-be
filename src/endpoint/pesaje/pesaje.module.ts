import { Module } from '@nestjs/common';
import { PesajeService } from './pesaje.service';
import { PesajeController } from './pesaje.controller';

@Module({
  providers: [PesajeService],
  controllers: [PesajeController]
})
export class PesajeModule { }
