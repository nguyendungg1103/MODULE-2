export class Patient<T> {
private _name: string ;
    private _ID :number;
    constructor(name:string,ID:number) {
        this._name =name;
        this.ID =ID;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

}