export class DistanceCircle {
    x:number;
    y: number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    displayName = "point";
    distance(b){
        const dx = this.x - b.x;
        const dy = this.y - b.y;
        return Math.hypot(dx,dy);
    }
}
let point1 = new DistanceCircle(4,5);
let point2 = new DistanceCircle(6,7);

console.log(point1.distance(7))



