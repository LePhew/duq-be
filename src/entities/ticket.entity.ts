import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @BeforeInsert()
    genTicketNumber() {
        let minm = 1;
        let maxm = 999;
        let tNumber = Math.floor(Math
            .random() * (maxm - minm + 1)) + minm

        this.numero = tNumber;
    }
}