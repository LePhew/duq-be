export class Usuario {

    constructor(
        usuario: string,
        contrasena: string,
        nombre: string,
        apellido: string,
        cargo: string
    ) { }
}

export interface IUsuario {
    id: string;
    usuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    cargo: string;
}