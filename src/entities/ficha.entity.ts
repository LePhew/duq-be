import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ficha')
export class FichaEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    codigo: string;

    @Column()
    placa: string;

    @Column()
    tara: number;

}