import { Module } from '@nestjs/common';
import { FichaService } from './ficha.service';
import { FichaController } from './ficha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaEntity } from 'src/entities/ficha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FichaEntity])],
  providers: [FichaService],
  controllers: [FichaController]
})
export class FichaModule { }
