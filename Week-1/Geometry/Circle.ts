class Circle {
    color: string;
    radius : string;
    filled : boolean;
    constructor(color:string,radius:string,filled:boolean) {
        this.color = color;
        this.radius = radius;
        this.filled = filled;

    }
    getArea():string {
        return this.radius*this.radius*Math.PI;
    }
    getPriMeter (): string{
        return 2 * this.radius * Math.PI;
    }
}
let circle = new Circle("red",'20',true)
let circle2 = new Circle("blue",'30',true)
console.log(circle)
console.log(circle2)
