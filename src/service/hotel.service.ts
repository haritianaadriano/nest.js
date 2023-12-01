import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Hotel } from "src/entity/hotel.entity";
import { Repository } from "typeorm";

@Injectable()
export class HotelService {
    constructor (
        @InjectRepository(Hotel) private readonly hotelRepository: Repository<Hotel>,
    ) {}
}