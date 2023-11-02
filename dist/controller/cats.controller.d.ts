import { CatsService } from '../service/cats.service';
import { S3Service } from 'src/service/s3.service';
import { InputTypeModel } from 'src/model/input.model';
export declare class CatsController {
    private readonly catsService;
    private readonly s3Service;
    constructor(catsService: CatsService, s3Service: S3Service);
    getCats(): string;
    saveAuthentication(toSave: InputTypeModel): void;
    getAllMdp(): Promise<InputTypeModel[]>;
}
