class Circle {
    radius: number;
    color : string
    constructor(radius:number, color:string) {
        this.radius = radius;
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    setColor(color: string){
        this.color= color;


    }
}
export default Circle;