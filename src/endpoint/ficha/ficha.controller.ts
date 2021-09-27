import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Ficha, IFicha } from '../../interfaces/ficha';
import { FichaService } from './ficha.service';

@Controller('ficha')
export class FichaController {

    constructor(
        private _fichaService: FichaService
    ) { }

    @Get()
    getAll() {
        return this._fichaService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this._fichaService.getOne(id);
    }

    @Post()
    create(@Body() data: Ficha) {
        let ficha = new Ficha(data.codigo, data.compania_id, data.tara, data.placa);
        return this._fichaService.create(ficha);
    }

    @Put(':id/update')
    update(@Param('id') id: string, @Body() data: Partial<Ficha>) {
        return this._fichaService.update(id, data);
    }


}
