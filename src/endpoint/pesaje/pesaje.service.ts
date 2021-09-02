import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PesajeEntity } from 'src/entities/pesaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PesajeService {

    constructor(@InjectRepository(PesajeEntity) private _pesajeRepository: Repository<PesajeEntity>) { }

    async getAll() {
        return await this._pesajeRepository.find();
    }

    async getOne(id: string) {
        return await this._pesajeRepository.findOne(id);
    }

    async create(data: any) {
        let pesaje = this._pesajeRepository.create(data);
        await this._pesajeRepository.save(pesaje);
        return pesaje;
    }

    async update(id: string, data: any) {
        let pesaje = await this._pesajeRepository.update(id, data);
        return pesaje;
    }

    async delete(id: string) {
        await this._pesajeRepository.delete(id);
        return { deleted: true };
    }

}
