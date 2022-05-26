var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point2D.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2D.prototype, "Y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Point2D.prototype.getXY = function () {
        return {
            x: this._x,
            y: this._y
        };
    };
    Point2D.prototype.setXY = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return Point2D;
}());
export { Point2D };
//# sourceMappingURL=Point2D.js.map