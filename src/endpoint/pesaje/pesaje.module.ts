import { Module } from '@nestjs/common';
import { PesajeService } from './pesaje.service';
import { PesajeController } from './pesaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PesajeEntity } from 'src/entities/pesaje.entity';
import { TicketModule } from '../ticket/ticket.module';
import { TicketEntity } from 'src/entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PesajeEntity, TicketEntity])],
  providers: [PesajeService],
  controllers: [PesajeController]
})
export class PesajeModule { }
