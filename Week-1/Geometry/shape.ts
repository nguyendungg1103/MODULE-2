class Shape{
    color:string;
    filled : boolean;
    constructor(color:string,filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor(){
        return this.color;
    }
    setColor(color:string){
        this.color =color;
    }
    getFilled(){
        return this.color;
    }
    setFilled (filled:boolean){
        this.filled = filled;

    }
}
let shape = new Shape("red",true);
let shape2 = new Shape("blue", false);
console.log(shape);
console.log(shape2);

