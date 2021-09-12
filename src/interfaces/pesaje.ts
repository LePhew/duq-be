export class Pesaje {
    compania_id: string;
    ficha_id: string;
    tonelaje: number;
    descuento: number;
    ticket_id: string;
    fecha_hora: Date;
    usuario_id: string;
    peso_bruto: number;

    constructor(
        compania_id: string,
        ficha_id: string,
        tonelaje: number,
        descuento: number,
        ticket_id: string,
        fecha_hora: Date,
        usuario_id: string,
        peso_bruto: number
    ) {
        this.compania_id = compania_id;
        this.ficha_id = ficha_id;
        this.tonelaje = tonelaje;
        this.descuento = descuento;
        this.ticket_id = ticket_id;
        this.fecha_hora = fecha_hora;
        this.usuario_id = usuario_id;
        this.peso_bruto = peso_bruto;
    }
}

export interface IPesaje {
    id: string;
    compania_id: string;
    ficha_id: string;
    tonelaje: number;
    descuento: number;
    ticket_id: string;
    fecha_hora: Date;
    usuario_id: string;
    peso_bruto: number;
}