
export class User {
    private _name:string;
    private _Email:string;
    private _role :number;
    constructor(name:string,
                Email:string,
                role:number) {

    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get Email(): string {
        return this._Email;
    }

    set Email(value: string) {
        this._Email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }
    getInfo(): string {
        return `Name: ${this._name} \nEmail: ${this._Email} \nRole: ${this._role}`;
    }

    isAdmin(): boolean {
        if (this._role === 1) {
            console.log("Admin")
            return true;
        }
        console.log("User");
        return false;
    }



}
