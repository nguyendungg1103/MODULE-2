var Rectangle = /** @class */ (function () {
    function Rectangle(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    return Rectangle;
}());
var retangle = new Rectangle("black", true, 20.20, 30.2);
console.log(retangle);
