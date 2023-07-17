import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { Profile } from './profile.entity';
import { Location } from './location.entity';

@Entity('Hotel')
export class Hotel{
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private average: Average;

    @Column()
    private comments: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    private profile: Profile;

    @ManyToOne(() => Location)
    private location: Location;

}

export enum Average{
    'BAD','GOOD'
}