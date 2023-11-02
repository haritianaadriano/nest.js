export class InputTypeModel {
    public cliId: string;
    public password: string;
    public username: string;

    public constructor (cliId: string, password: string, username: string) {
        this.cliId = cliId;
        this.password = password;
        this.username = username;
    }
}