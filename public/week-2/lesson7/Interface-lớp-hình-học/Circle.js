var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.toString = function () {
        return "A Circle with radius ="
            + this.getRadius();
    };
    return Circle;
}());
export { Circle };
//# sourceMappingURL=Circle.js.map