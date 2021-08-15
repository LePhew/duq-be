import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pesaje')
export class PesajeEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ficha: string;

    @Column()
    ticket: number;
}