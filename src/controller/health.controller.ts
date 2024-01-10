import { Controller, Get } from "@nestjs/common";

@Controller()
export class HealthController {
    @Get("/ping")
    ping(): String {
        return "pong";
    }
}