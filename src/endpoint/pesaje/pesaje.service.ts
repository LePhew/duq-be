import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PesajeEntity } from '../../entities/pesaje.entity';
import { TicketEntity } from '../../entities/ticket.entity';
import { Pesaje } from '../../interfaces/pesaje';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class PesajeService {
  constructor(
    @InjectRepository(PesajeEntity)
    private _pesajeRepository: Repository<PesajeEntity>,
    @InjectRepository(TicketEntity)
    private _ticketRepository: Repository<TicketEntity>,
  ) {}

  async getAll() {
    return await getRepository(PesajeEntity)
      .createQueryBuilder('pesaje')
      .innerJoinAndSelect('pesaje.ticket', 'ticket')
      .innerJoinAndSelect('pesaje.ficha', 'ficha')
      .innerJoinAndSelect('ficha.compania', 'compania')
      .where('ticket.cerrado = 0')
      .orderBy('ticket.fecha_emision', 'DESC')
      .getMany();
  }

  async getAllPesajes() {
    return await getRepository(PesajeEntity)
      .createQueryBuilder('pesaje')
      .innerJoinAndSelect('pesaje.ticket', 'ticket')
      .innerJoinAndSelect('pesaje.ficha', 'ficha')
      .innerJoinAndSelect('ficha.compania', 'compania')
      .orderBy('ticket.fecha_emision', 'DESC')
      .getMany();
  }

  async getOne(id: string) {
    return await this._pesajeRepository.findOne(id);
  }

  async create(data: Pesaje) {
    let ticket = this._ticketRepository.create();
    let created = await this._ticketRepository.save(ticket);

    ticket = await this._ticketRepository.findOne(created.id);

    let pesaje = this._pesajeRepository.create();

    pesaje.ficha_id = data.ficha_id;
    pesaje.usuario_id = data.usuario_id;
    pesaje.tonelaje = data.tonelaje;
    pesaje.peso_bruto = data.peso_bruto;
    let createdPesaje = await this._pesajeRepository.save(pesaje);

    pesaje = await this._pesajeRepository.findOne(createdPesaje.id);

    pesaje.ticket_id = ticket.id;
    ticket.pesaje_id = pesaje.id;

    await this._pesajeRepository.update(pesaje.id, pesaje);
    await this._ticketRepository.update(ticket.id, ticket);
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
