import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FichaEntity } from 'src/entities/ficha.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FichaService {

    constructor(@InjectRepository(FichaEntity) private _fichaRepository: Repository<FichaEntity>) { }

    async getAll() {
        return await this._fichaRepository.find();
    }

    async getOne(id: string) {
        return await this._fichaRepository.findOne(id);
    }

    async create(data: any) {
        let ficha = this._fichaRepository.create(data);
        await this._fichaRepository.save(ficha);
        return ficha;
    }

    async update(id: string, data: any) {
        let ficha = await this._fichaRepository.update(id, data);
        return ficha;
    }

    async delete(id: string) {
        await this._fichaRepository.delete(id);
        return { deleted: true };
    }


}
