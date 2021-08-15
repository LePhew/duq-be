import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('compania')
export class CompaniaEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    municipio: string;

    @Column()
    distrito: string;
}