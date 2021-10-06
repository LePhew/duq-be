import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntity } from '../../entities/ticket.entity';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class TicketService {

    constructor(@InjectRepository(TicketEntity) private _ticketRepository: Repository<TicketEntity>) { }

    async getAll() {
        return await this._ticketRepository.find({
            where: { cerrado: false }
        });
    }
    async getCerrados() {
        return await this._ticketRepository.find({
            where: { cerrado: true }
        });
    }

    //TODO: I need to find a way to get values and labels as arrays on the front-end
    async getCerradosByDay() {
        let cerradosByDay = await getRepository(TicketEntity)
            .createQueryBuilder('tck')
            .select("DAY(tck.fecha_emision)", "dias")
            .addSelect("COUNT(tck.cerrado)", "cantidad")
            .where("tck.cerrado = 1")
            .groupBy("DAY(tck.fecha_emision)")
            .getRawMany();

        let labels = cerradosByDay.map(c => c.dias);
        let data = cerradosByDay.map(c => c.cantidad);
        return {
            labels,
            data
        };

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

    async generarCierre() {
        this._ticketRepository.query("UPDATE duqdb.ticket SET ticket.cerrado = 1 WHERE ticket.fecha_emision < DATE_SUB(current_timestamp(), INTERVAL 1 HOUR);")
    }
}
