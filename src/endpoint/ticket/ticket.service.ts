import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntity } from '../../entities/ticket.entity';
import { getRepository, Repository } from 'typeorm';
import { clearConfigCache } from 'prettier';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketEntity)
    private _ticketRepository: Repository<TicketEntity>,
  ) {}

  async getAll() {
    return await this._ticketRepository.find({
      where: { cerrado: false },
    });
  }
  async getCerrados() {
    return await this._ticketRepository.find({
      where: { cerrado: true },
    });
  }

  //TODO: I need to find a way to get values and labels as arrays on the front-end
  async getCerradosByDay() {
    let cerradosByDay = await getRepository(TicketEntity)
      .createQueryBuilder('tck')
      .select("DATE_FORMAT(tck.fecha_emision, '%m-%d')", 'dias')
      .addSelect('COUNT(tck.cerrado)', 'cantidad')
      .where('tck.cerrado = 1')
      .groupBy("DATE_FORMAT(tck.fecha_emision, '%m-%d')")
      .getRawMany();

    let labels = cerradosByDay.map((c) => c.dias);
    let data = cerradosByDay.map((c) => c.cantidad);
    return {
      labels,
      data,
    };
  }

  async getTonelajeByCompany() {
    let companyTonelaje = await getRepository(TicketEntity).query(`
      select c.nombre, sum(p.tonelaje) as tonelaje from ticket t
        inner join pesaje p
        on t.pesaje_id = p.id
        inner join ficha f 
        on p.ficha_id = f.id
        inner join compania c 
        on f.compania_id = c.id
        where t.cerrado = 1
        group by c.nombre
      `);
    let labels = companyTonelaje.map((c) => c.nombre);
    let data = companyTonelaje.map((c) => c.tonelaje);
    return {
      labels,
      data,
    };
  }

  async getCerradosByMonth() {
    let cerradosByMonth = await getRepository(TicketEntity)
      .createQueryBuilder('tck')
      .select("DATE_FORMAT(tck.fecha_emision, '%M')", 'mes')
      .addSelect('COUNT(tck.cerrado)', 'cantidad')
      .where('tck.cerrado = 1')
      .groupBy("DATE_FORMAT(tck.fecha_emision, '%M')")
      .getRawMany();

    let labels = cerradosByMonth.map((c) => c.mes);
    let data = cerradosByMonth.map((c) => c.cantidad);
    return {
      labels,
      data,
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
    this._ticketRepository.query(
      'UPDATE duqdb.ticket SET ticket.cerrado = 1 WHERE ticket.fecha_emision < DATE_SUB(current_timestamp(), INTERVAL 1 HOUR);',
    );
  }
}
