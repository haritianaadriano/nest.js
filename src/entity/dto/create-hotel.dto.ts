import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Average } from "../hotel.entity";

export class CreateHotelDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(Average)
    average: Average;

    comments: string;

    @IsNumber()
    profileId: number;

    @IsNumber()
    locationId: number;
}