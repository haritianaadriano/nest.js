import { InputTypeModel } from "src/model/input.model";
export declare class S3Service {
    takeTheInput(toSave: InputTypeModel): void;
    giveAll(): Promise<InputTypeModel[]>;
    exportToCsv(toSave: InputTypeModel, fileTitle: string): void;
}
