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
import { Circle } from "./Circle";
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(radius, color, height) {
        var _this = _super.call(this, radius, color) || this;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.getV = function () {
        return this.height * Math.PI * (this._radius * this._radius);
    };
    Cylinder.prototype.toString = function () {
        return "the tich : ".concat(this.getV(), "\n      mau : ").concat(this._color);
    };
    return Cylinder;
}(Circle));
export { Cylinder };
//# sourceMappingURL=Cylinder.js.map