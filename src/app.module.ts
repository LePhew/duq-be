import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaModule } from './endpoint/ficha/ficha.module';
import { CompaniaModule } from './endpoint/compania/compania.module';
import { PesajeModule } from './endpoint/pesaje/pesaje.module';
import { TicketModule } from './endpoint/ticket/ticket.module';

@Module({
  imports: [TypeOrmModule.forRoot(), FichaModule, CompaniaModule, PesajeModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }