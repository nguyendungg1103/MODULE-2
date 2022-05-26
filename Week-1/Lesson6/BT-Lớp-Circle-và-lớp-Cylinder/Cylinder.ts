
import {Circle} from "./Circle";

export class Cylinder extends Circle{
    height:number;
    constructor(radius:number,color:string,height:number) {
        super(radius,color);
        this.height=height;
    }
    getV():number{
        return this.height*Math.PI*(this._radius*this._radius);
    }
    toString(): string {
        return `the tich : ${this.getV()}
      mau : ${this._color}`
    }

}