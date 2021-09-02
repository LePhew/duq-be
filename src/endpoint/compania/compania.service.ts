import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompaniaEntity } from 'src/entities/compania.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniaService {

    constructor(@InjectRepository(CompaniaEntity) private _companiaRepository: Repository<CompaniaEntity>) { }

    async getAll() {
        return await this._companiaRepository.find();
    }

    async getOne(id: string) {
        return await this._companiaRepository.findOne(id);
    }

    async create(data: any) {
        let compania = this._companiaRepository.create(data);
        await this._companiaRepository.save(compania);
        return compania;
    }

    async update(id: string, data: any) {
        let compania = await this._companiaRepository.update(id, data);
        return compania;
    }

    async delete(id: string) {
        await this._companiaRepository.delete(id);
        return { deleted: true };
    }

}
