import { createObjectCsvWriter } from "csv-writer";
import { InputTypeModel } from "src/model/input.model";
import * as AWS from "aws-sdk";
import * as fs from "fs";

export class S3Service {

    takeTheInput(toSave: InputTypeModel): void {
        this.exportToCsv(toSave, toSave.username);
    }

    giveAll(): Promise<InputTypeModel[]> {
        return new Promise((resolve, reject) => {
            fs.readFile("data_mdp.csv", "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    // Parse CSV data and map it into InputTypeModel objects
                    const inputModels: InputTypeModel[] = data
                        .split("\n")
                        .map((line) => {
                            const [cliId, username, password] = line.split(",");
                            return new InputTypeModel(cliId, username, password);
                        });
                    resolve(inputModels);
                }
            });
        });
    }

    exportToCsv(toSave: InputTypeModel, fileTitle: string): void {
        const data = [];
        data.push(toSave);

        const csvWriter = createObjectCsvWriter({
            path: "data_mdp.csv",
            header: [
                {id: "cliId", title: "CliId"},
                {id: "username", title: "Username"},
                {id: "password", title: "Password"}
            ]
        });

        csvWriter
            .writeRecords(data)
            .then(() => {
              console.log("printing ...");
            })
            .catch((err: any) => {
                console.error('Error during writing csv: ' + err);
            });
    }
}