import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Profile")
export class Profile{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column({type: 'bytea'})
    private profile: Uint32Array;
}