"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const csv_writer_1 = require("csv-writer");
const input_model_1 = require("../model/input.model");
const fs = require("fs");
class S3Service {
    takeTheInput(toSave) {
        this.exportToCsv(toSave, toSave.username);
    }
    giveAll() {
        return new Promise((resolve, reject) => {
            fs.readFile("data_mdp.csv", "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    const inputModels = data
                        .split("\n")
                        .map((line) => {
                        const [cliId, username, password] = line.split(",");
                        return new input_model_1.InputTypeModel(cliId, username, password);
                    });
                    resolve(inputModels);
                }
            });
        });
    }
    exportToCsv(toSave, fileTitle) {
        const data = [];
        data.push(toSave);
        const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
            path: "data_mdp.csv",
            header: [
                { id: "cliId", title: "CliId" },
                { id: "username", title: "Username" },
                { id: "password", title: "Password" }
            ]
        });
        csvWriter
            .writeRecords(data)
            .then(() => {
            console.log("printing ...");
        })
            .catch((err) => {
            console.error('Error during writing csv: ' + err);
        });
    }
}
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map