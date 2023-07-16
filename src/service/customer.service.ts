import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/entity/customer.entity";
import { CreateCustomerDto } from "src/entity/dto/create-customer.dto";
import { Repository } from "typeorm";

@Injectable()
export class CustomerService{
    constructor(
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>,
    ){}

    createCustomer(createCustomer: CreateCustomerDto): Promise<Customer>{
        const customer = new Customer();
        customer.setFirstname(createCustomer.firstname);
        customer.setLastname(createCustomer.lastname);
        customer.setAdult(createCustomer.adult);
        return this.customerRepository.save(customer);
    }

    findAllCustomer(): Promise<Customer[]>{
        return this.customerRepository.find();
    }
}