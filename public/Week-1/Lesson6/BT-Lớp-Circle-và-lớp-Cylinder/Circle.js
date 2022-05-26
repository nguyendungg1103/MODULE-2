var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return "b\u00E1n k\u00EDnh ".concat(this._radius * this._radius * Math.PI, " m\u00E0u ").concat(this._color);
    };
    return Circle;
}());
export { Circle };
//# sourceMappingURL=Circle.js.map