import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity('Hotel')
export class Hotel{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private average: string;

    @Column()
    private comments: string;
}