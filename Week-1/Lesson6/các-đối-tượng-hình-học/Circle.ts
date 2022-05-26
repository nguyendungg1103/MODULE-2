import {Shape} from "./shape";
export class Circle extends Shape{
    private _radius : number = 1.0;
    constructor(radius:number,color:string,fillter:boolean) {
        super(color,fillter);
        this._radius = radius;
    }

    public getRadius(): number {
        return this._radius;
    }

    public setRadius(value: number) {
        this._radius = value;
    }
   public getArea():number {
        return this._radius* this._radius* Math.PI;
    }
    public getPerimeter(): number {
        return 2 * this._radius * Math.PI;
    }
    public toString(): string {
        return "A Circle with radius"
        + this.getRadius()
       + ", which is a subclass of "
       + super.toString()
    }
}