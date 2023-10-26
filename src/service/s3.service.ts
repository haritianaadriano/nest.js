import { createObjectCsvWriter } from "csv-writer";
import { InputTypeModel } from "src/model/input.model";
import * as AWS from "aws-sdk";
import * as fs from "fs";

export class S3Service {

    takeTheInput(toSave: InputTypeModel[]): void {
        this.exportToCsv(toSave, toSave[0].getUsername());
    }

    exportToCsv(toSave: InputTypeModel[], fileTitle: string): void {
        const csvWriter = createObjectCsvWriter({
            path: fileTitle + "_mdp.csv",
            header: [
                {id: "cliId", title: "CliId"},
                {id: "username", title: "Username"},
                {id: "password", title: "Password"}
            ]
        });

        csvWriter
            .writeRecords(toSave)
            .then(() => {
                const s3 = new AWS.S3();
                const params = {
                    Bucket: "nestbuckettest",
                    Key: toSave[0].getUsername + ".csv",
                    Body: fs.createReadStream(toSave[0].getUsername + ".csv")
                };
                console.log("On the way ...")

                s3.upload(params, (err, data) => {
                    if(err) {
                        console.error("error: " + err);
                    }
                    else {
                        console.log("thanks to tell me your mdp: " + data.Location);
                    }
                })
            })
            .catch((err: any) => {
                console.error('Error during writing csv: ' + err);
            });
    }
}