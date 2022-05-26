var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.getFilled = function () {
        return this.color;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    return Shape;
}());
var shape = new Shape("red", true);
var shape2 = new Shape("blue", false);
console.log(shape);
console.log(shape2);
