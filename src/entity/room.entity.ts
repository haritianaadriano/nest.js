import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Room')
class Room {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private ref: string;

    @Column()
    private status: boolean;
}