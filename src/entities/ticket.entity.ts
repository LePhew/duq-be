import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PesajeEntity } from "./pesaje.entity";

@Entity('ticket')
export class TicketEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    numero: number;

    @CreateDateColumn()
    fecha_emision: Date;

    @OneToOne(() => PesajeEntity, pesaje => pesaje.ticket)
    @JoinColumn({ name: "pesaje_id" })
    pesaje: PesajeEntity;

    @Column({ nullable: true })
    pesaje_id?: string;
}