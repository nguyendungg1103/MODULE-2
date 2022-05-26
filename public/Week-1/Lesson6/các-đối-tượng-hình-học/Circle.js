var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Shape } from "./shape";
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, fillter) {
        var _this = _super.call(this, color, fillter) || this;
        _this._radius = 1.0;
        _this._radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.getArea = function () {
        return this._radius * this._radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this._radius * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "A Circle with radius"
            + this.getRadius()
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Circle;
}(Shape));
export { Circle };
//# sourceMappingURL=Circle.js.map