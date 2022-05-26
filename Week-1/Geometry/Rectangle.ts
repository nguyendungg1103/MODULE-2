class Rectangle {
    color:string;
    filled:boolean;
    width : number;
    length : number;
constructor(color:string,
            filled:boolean,
            width: number,
            length:number){
    this.color = color;
    this.filled = filled;
    this.length = length;
    this.width = width;

}
getArea():number{
    return this.width* this.length;

}
    getPerimeter():number{
    return 2 * (this.width + this.length);
}

}
let retangle = new Rectangle("black",true,20.20,30.2)
console.log(retangle)