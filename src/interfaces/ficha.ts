export class Ficha {
    constructor(
        codigo: number,
        compania_id: string,
        tara: number,
        peso_bruto: number
    ) { }
}

export interface IFicha {
    codigo: number;
    compania_id: string;
    tara: number;
    peso_bruto: number;
}