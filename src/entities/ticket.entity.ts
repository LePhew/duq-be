import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PesajeEntity } from "./pesaje.entity";

@Entity('ticket')
export class TicketEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Generated('increment')
    numero: number;

    @CreateDateColumn()
    fecha_emision: Date;

    @OneToOne(() => PesajeEntity, pesaje => pesaje.ticket)
    @JoinColumn({ name: "pesaje_id" })
    pesaje: PesajeEntity;

    @Column()
    pesaje_id: string;

}