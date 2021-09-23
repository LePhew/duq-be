import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity) private _usuarioRepository: Repository<UsuarioEntity>) { }

    async getAll() {
        return await this._usuarioRepository.find();
    }

    async getByName(usuario: string) {
        return await this._usuarioRepository.findOne({ where: { usuario } })
    }

    async getOne(id: string) {
        return await this._usuarioRepository.findOne(id);
    }

    async create(data: any) {
        let usuario = this._usuarioRepository.create(data);
        await this._usuarioRepository.save(usuario);
        return usuario;
    }

    async update(id: string, data: any) {
        let usuario = await this._usuarioRepository.update(id, data);
        return usuario;
    }

    async delete(id: string) {
        await this._usuarioRepository.delete(id);
        return { deleted: true };
    }
}
