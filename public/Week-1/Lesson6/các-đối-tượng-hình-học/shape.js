var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this._color = color;
        this._filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this._color;
    };
    Shape.prototype.setColor = function (value) {
        this._color = value;
    };
    Shape.prototype.isFilled = function () {
        return this._filled;
    };
    Shape.prototype.setFilled = function (value) {
        this._filled = value;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    };
    return Shape;
}());
export { Shape };
//# sourceMappingURL=shape.js.map