import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity('Hotel')
class Hotel{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private location: string;

    @Column()
    private average: string;
}