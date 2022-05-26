import Circle from "./Circle";
function distance(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circle1 = new Circle(8, "red");
var circle2 = new Circle(12, "blue");
console.log(distance(circle1, circle2, 22));
//# sourceMappingURL=main.js.map