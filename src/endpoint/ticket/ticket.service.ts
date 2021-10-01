import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntity } from '../../entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {

    constructor(@InjectRepository(TicketEntity) private _ticketRepository: Repository<TicketEntity>) { }

    async getAll() {
        return await this._ticketRepository.find({
            where: { cerrado: false }
        });
    }

    async getOne(id: string) {
        return await this._ticketRepository.findOne(id);
    }

    async create(data: any) {
        let ticket = this._ticketRepository.create(data);
        await this._ticketRepository.save(ticket);
        return ticket;
    }

    async update(id: string, data: any) {
        let ticket = await this._ticketRepository.update(id, data);
        return ticket;
    }

    async delete(id: string) {
        await this._ticketRepository.delete(id);
        return { deleted: true };
    }

    async generarCierre(){
        this._ticketRepository.query("UPDATE duqdb.ticket SET ticket.cerrado = 1 WHERE ticket.fecha_emision < DATE_SUB(current_timestamp(), INTERVAL 1 HOUR);")
    }
}
