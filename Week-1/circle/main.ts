import Circle from "./Circle";
 function distance (circleOne:Circle,circleTwo:Circle,d: number){
    let distance = Math.pow (circleOne.radius-circleTwo.radius,2)+ Math.pow(d,2);
    return Math.sqrt(distance)

 }


 let circle1 = new Circle(8,"red");
 let circle2 = new Circle(12,"blue");
console.log(distance(circle1,circle2,22))