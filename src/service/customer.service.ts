import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/entity/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomerService{
    constructor(
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>,
    ){}

    createCustomer
}