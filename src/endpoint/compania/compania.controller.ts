import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Compania } from 'src/interfaces/compania';
import { CompaniaService } from './compania.service';

@Controller('compania')
export class CompaniaController {

    constructor(
        private _companiaService: CompaniaService
    ) { }

    @Get()
    getAll() {
        return this._companiaService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this._companiaService.getOne(id);
    }

    @Post()
    create(@Body() data: Compania) {
        return this._companiaService.create(data);
    }

    @Put(':id/update')
    update(@Param('id') id: string, @Body() data: Partial<Compania>) {
        return this._companiaService.update(id, data);
    }
}
