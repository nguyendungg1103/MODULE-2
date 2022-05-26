export class Staff<T> {
 private _month:number;
 private _salary:number;
  private _next: Staff<T> | null = null;

    constructor(month: number,salary:number) {
        this._month = month;
        this._salary = salary;
        this._next = null;
    }


    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }

    get next(): Staff<T> | null {
        return this._next;
    }

    set next(value: Staff<T> | null) {
        this._next = value;
    }
    getStaff():any{
        return { month :this._month,
            salary:this._salary }

    }
}