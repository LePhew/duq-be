import { Module } from '@nestjs/common';
import { CompaniaService } from './compania.service';
import { CompaniaController } from './compania.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniaEntity } from '../../entities/compania.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompaniaEntity])],
  providers: [CompaniaService],
  controllers: [CompaniaController]
})
export class CompaniaModule { }
