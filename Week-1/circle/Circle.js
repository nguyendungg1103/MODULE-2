"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    return Circle;
}());
exports.default = Circle;
