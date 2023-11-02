"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("../service/cats.service");
const s3_service_1 = require("../service/s3.service");
const input_model_1 = require("../model/input.model");
let CatsController = exports.CatsController = class CatsController {
    constructor(catsService, s3Service) {
        this.catsService = catsService;
        this.s3Service = s3Service;
    }
    getCats() {
        return this.catsService.getCats();
    }
    saveAuthentication(toSave) {
        this.s3Service.takeTheInput(toSave);
    }
    async getAllMdp() {
        const inputModels = await this.s3Service.giveAll();
        return inputModels;
    }
};
__decorate([
    (0, common_1.Get)(`/cats`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CatsController.prototype, "getCats", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_model_1.InputTypeModel]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "saveAuthentication", null);
__decorate([
    (0, common_1.Get)('/mdp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "getAllMdp", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [cats_service_1.CatsService,
        s3_service_1.S3Service])
], CatsController);
//# sourceMappingURL=cats.controller.js.map