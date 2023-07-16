import { type } from "os";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "./hotel.entity";

@Entity("Profile")
export class Profile{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column({type: 'bytea'})
    private profile: Uint32Array;
}