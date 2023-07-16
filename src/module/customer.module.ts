import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "src/controller/customer.controller";
import { Customer } from "src/entity/customer.entity";
import { CustomerService } from "src/service/customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    controllers: [CustomerController],
    providers: [CustomerService],
})

export class CustomerModule {}