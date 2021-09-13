export class Ticket {

    pesaje_id: string;
    fecha_emision: Date;

    constructor(pesaje_id: string, fecha_emision: Date) {
        this.pesaje_id = pesaje_id;
        this.fecha_emision = fecha_emision
    }
}

export interface ITicket {
    id: string;
    numero: number;
    pesaje_id: string;
    fecha_emision: Date;
}