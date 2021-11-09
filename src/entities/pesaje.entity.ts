import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { FichaEntity } from "./ficha.entity";
import { TicketEntity } from "./ticket.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity('pesaje')
export class PesajeEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => FichaEntity, { eager: true })
    @JoinColumn({ name: "ficha_id" })
    ficha: FichaEntity;

    @Column()
    ficha_id: string;

    @OneToOne(() => TicketEntity, ticket => ticket.pesaje, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "ticket_id" })
    ticket: TicketEntity;

    @Column({ nullable: true })
    ticket_id?: string;

    @Column()
    peso_bruto: number;

    @Column()
    tonelaje: number;

    @ManyToOne(() => UsuarioEntity, { eager: true })
    @JoinColumn({ name: "usuario_id" })
    usuario: UsuarioEntity;

    @Column()
    usuario_id: string;

    @Column({ nullable: true })
    descuento: number;

}