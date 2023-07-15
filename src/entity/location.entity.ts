import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Location")
class Location{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private address: string;
}