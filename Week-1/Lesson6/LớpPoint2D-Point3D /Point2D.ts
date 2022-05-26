export class Point2D{
    private _x:number;
    private _y:number;
    constructor(x:number,y:number) {
        this._x = x;
        this._y = y;
    }

    get X(): number {
        return this._x;
    }

    set X(value: number) {
        this._x = value;
    }
    get Y(): number {
        return this._y;
    }

    set Y(value: number) {
        this._y = value;
    }
    getXY():object{
        return {
            x:this._x,
            y:this._y
        }

    }
    setXY(x:number,y:number):void{
        this._x =x;
        this._y =y;
    }
}
