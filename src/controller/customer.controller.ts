import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCustomerDto } from "src/entity/dto/create-customer.dto";
import { CustomerService } from "src/service/customer.service";

@Controller("customer")
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Post()
    insertCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.customerService.createCustomer(createCustomerDto);
    }

    @Get()
    findCustomers() {
        return this.customerService.findAllCustomer();
    }
}