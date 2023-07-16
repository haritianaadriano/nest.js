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

    // Getter
    public getId(){
        return this.id;
    }
    public getFirstname(){
        return this.firstname;
    }
    public getLastname(){
        return this.lastname;
    }
    public isAdult(){
        return this.adult;
    }

    //Setter
    public setId(id: number){
        this.id = id;
    }
    public setFirstname(firstname: string){
        this.firstname = firstname;
    }
    public setLastname(lastname: string){
        this.lastname = lastname;
    }
    public setAdult(adult: boolean){
        this.adult = adult;
    }
}