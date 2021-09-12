export class Ficha {
    codigo: number;
    compania_id: string;
    tara: number;
    peso_bruto: number;
    placa: string;
    constructor(codigo: number, compania_id: string, tara: number, placa: string) {

        this.codigo = codigo;
        this.compania_id = compania_id;
        this.tara = tara;
        this.placa = placa;
    }
}

export interface IFicha {
    id: string;
    codigo: number;
    compania: string;
    tara: number;
    placa: string
}