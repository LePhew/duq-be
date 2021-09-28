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
    "host": "monstasrv.mysql.database.azure.com",
    "port": 3306,
    "username": "apps@monstasrv",
    "password": "Urn0td3c3nt",
    "database": "duqdb",
    "synchronize": true,
    "logging": true,
    "entities": [
      __dirname + "/entities/*.entity.js"
    ]
  }), FichaModule, CompaniaModule, PesajeModule, TicketModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }