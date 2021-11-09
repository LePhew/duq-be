import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Pesaje } from '../../interfaces/pesaje';
import { PesajeService } from './pesaje.service';

@Controller('pesaje')
export class PesajeController {

    constructor(
        private _pesajeService: PesajeService
    ) { }


    @Get()
    getAll() {
        return this._pesajeService.getAll();
    }

    @Get('all')
    getAllPesajes(){
        return this._pesajeService.getAllPesajes();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this._pesajeService.getOne(id);
    }

    @Post()
    create(@Body() data: Pesaje) {
        return this._pesajeService.create(data);
    }

    @Put(':id/update')
    update(@Param('id') id: string, @Body() data: Partial<Pesaje>) {
        return this._pesajeService.update(id, data);
    }
    
    @Post('delete/:id')
    delete(@Param('id') id: string){
        return this._pesajeService.delete(id);
    }
}
