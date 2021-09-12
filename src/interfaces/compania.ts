export class Compania {

    nombre: string;
    distrito: string;
    municipio: string;

    constructor(nombre: string, distrito: string, municipio: string) {
        this.nombre = nombre;
        this.distrito = distrito;
        this.municipio = municipio;
    }
}

export interface ICompania {
    id: string;
    nombre: string;
    municipio: string;
    distrito: string;
}