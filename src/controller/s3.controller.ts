import { Controller, Get } from "@nestjs/common";

@Controller()
export class S3Controller {

    @Get('/ping')
    getPong(): string {
        return "pong";
    }
}