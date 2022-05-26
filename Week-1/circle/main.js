"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function distance(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circle1 = new Circle_1["default"](8, "redts");
var circle2 = new Circle_1["default"](12, "blue");
console.log(distance(circle1, circle2, 22));
