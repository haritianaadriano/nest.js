import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Location")
export class Location{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private address: string;
}