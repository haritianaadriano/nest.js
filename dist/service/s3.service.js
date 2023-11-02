"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const csv_writer_1 = require("csv-writer");
const AWS = require("aws-sdk");
const fs = require("fs");
class S3Service {
    takeTheInput(toSave) {
        this.exportToCsv(toSave, toSave.username);
    }
    exportToCsv(toSave, fileTitle) {
        const data = [];
        data.push(toSave);
        const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
            path: fileTitle + "_mdp.csv",
            header: [
                { id: "cliId", title: "CliId" },
                { id: "username", title: "Username" },
                { id: "password", title: "Password" }
            ]
        });
        csvWriter
            .writeRecords(data)
            .then(() => {
            const s3 = new AWS.S3();
            const params = {
                Bucket: "nestbuckettest",
                Key: fileTitle + "_mdp.csv",
                Body: fs.createReadStream(fileTitle + "_mdp.csv")
            };
            console.log("On the way ...");
            s3.upload(params, (err, data) => {
                if (err) {
                    console.error("error: " + err);
                }
                else {
                    console.log("thanks to tell me your mdp: " + data.Location);
                }
            });
        })
            .catch((err) => {
            console.error('Error during writing csv: ' + err);
        });
    }
}
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map