var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this._name = name;
        this._color = color;
    }
    Object.defineProperty(Shape.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
export { Shape };
//# sourceMappingURL=Shape.js.map