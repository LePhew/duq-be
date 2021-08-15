import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ticket')
export class TicketEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    numero: number;

    @CreateDateColumn()
    fecha_emision: Date;

}