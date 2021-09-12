import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { Usuario } from 'src/interfaces/usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private _usuarioService: UsuarioService
    ) { }


    @Get()
    getAll() {
        return this._usuarioService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this._usuarioService.getOne(id);
    }

    @Post()
    create(@Body() data: Usuario) {
        return this._usuarioService.create(data);
    }

    @Put(':id/update')
    update(@Param('id') id: string, @Body() data: Partial<Usuario>) {
        this._usuarioService.update(id, data);
        return this._usuarioService.getOne(id);
    }
}
