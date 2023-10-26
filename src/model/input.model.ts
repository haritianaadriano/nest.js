export class InputTypeModel {
    private cliId: string;
    private password: string;
    private username: string;

    public InputType(cliId: string, password: string, username: string) {
        this.cliId = cliId;
        this.password = password;
        this.username = username;
    }

    public getCliId() {
        return this.cliId;
    }
    public getPassword() {
        return this.password;
    }
    public getUsername() {
        return this.username;
    }

    public setCliId(cliId: string ) {
        this.cliId = cliId;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public setUsername(username: string) {
        this.username = username;
    }
}