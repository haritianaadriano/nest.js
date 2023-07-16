import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Customer")
export class Customer{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private firstname: string;

    @Column()
    private lastname: string;

    @Column()
    private adult: boolean;
}