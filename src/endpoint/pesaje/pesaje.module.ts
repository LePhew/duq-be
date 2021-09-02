import { Module } from '@nestjs/common';
import { PesajeService } from './pesaje.service';
import { PesajeController } from './pesaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PesajeEntity } from 'src/entities/pesaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PesajeEntity])],
  providers: [PesajeService],
  controllers: [PesajeController]
})
export class PesajeModule { }
