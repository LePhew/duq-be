export class Pesaje {
    constructor(
        compania_id: string,
        ficha_id: string,
        tonelaje: number,
        descuento: number,
        ticket_id: string,
        fecha_hora: string,
        usuario_id: string
    ) { }
}

export interface IPesaje {
    id: string;
    compania_id: string;
    ficha_id: string;
    tonelaje: number;
    descuento: number;
    ticket_id: string;
    fecha_hora: string;
    usuario_id: string
}