export class Circle{
    protected _radius:number;
    protected _color :string;
    constructor(radius:number,color:string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    toString():string {
        return `bán kính ${this._radius*this._radius*Math.PI} màu ${this._color}`
    }

    }
