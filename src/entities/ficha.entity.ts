import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CompaniaEntity } from "./compania.entity";

@Entity('ficha')
export class FichaEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    codigo: string;

    @ManyToOne(() => CompaniaEntity, { eager: true })
    @JoinColumn({ name: "compania_id" })
    compania: CompaniaEntity;

    @Column()
    compania_id: string;

    @Column()
    placa: string;

    @Column()
    tara: number;

}