import { Module } from '@nestjs/common';
import { CompaniaService } from './compania.service';
import { CompaniaController } from './compania.controller';

@Module({
  providers: [CompaniaService],
  controllers: [CompaniaController]
})
export class CompaniaModule {}
