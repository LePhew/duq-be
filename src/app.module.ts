import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaModule } from './endpoint/ficha/ficha.module';
import { CompaniaModule } from './endpoint/compania/compania.module';
import { PesajeModule } from './endpoint/pesaje/pesaje.module';
import { TicketModule } from './endpoint/ticket/ticket.module';
import { UsuarioModule } from './endpoint/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "35.227.117.131",
    "port": 3306,
    "username": "root",
    "password": "urn0td3c3nt",
    "database": "duqdb",
    "synchronize": true,
    "logging": true,
    "entities": [
      "dist/entities/*.entity.js"
    ]
  }), FichaModule, CompaniaModule, PesajeModule, TicketModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }