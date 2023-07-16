import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "./hotel.entity";

@Entity('Room')
export class Room {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private ref: string;

    @Column()
    private status: boolean;

    @ManyToOne(() => Hotel)
    private hotel: Hotel;
}