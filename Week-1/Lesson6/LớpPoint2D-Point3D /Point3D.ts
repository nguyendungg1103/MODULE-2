import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private _z:number;
    constructor(x:number,y:number,z:number) {
        super(x,y);
        this._z=z;
    }

    get Z(): number {
        return this._z;
    }

    set Z(value: number) {
        this._z = value;
    }
    getXYZ(): object {
        return {
            ...super.getXY(),
            z:this._z
        }

    }
    setXYZ(x: number, y: number,z:number):void {
        super.setXY(x,y);
        this._z =z;
    }
}