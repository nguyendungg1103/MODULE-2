var Circle = /** @class */ (function () {
    function Circle(color, radius, filled) {
        this.color = color;
        this.radius = radius;
        this.filled = filled;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPriMeter = function () {
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
var circle = new Circle("red", '20', true);
var circle2 = new Circle("blue", '30', true);
console.log(circle);
console.log(circle2);
