import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Customer")
class Customer{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private firstname: string;

    @Column()
    private lastname: string;

    @Column()
    private adult: boolean;
}