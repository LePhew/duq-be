import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    usuario: string;

    @Column()
    contrasena: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    cargo: string;
}