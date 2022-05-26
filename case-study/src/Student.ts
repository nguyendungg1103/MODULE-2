export class Student{
    private _name : string;
    private _code : number;
    private _date : string;
    constructor(name:string,
                code:number,
                date: string) {
        this._name = name;
        this._code= code;
        this._date = date;

    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getCode(): number {
        return this._code;
    }

    setCode(value: number) {
        this._code = value;
    }

    getDate(): string {
        return this._date;
    }

    setDate(value: string) {
        this._date = value;
    }
}
