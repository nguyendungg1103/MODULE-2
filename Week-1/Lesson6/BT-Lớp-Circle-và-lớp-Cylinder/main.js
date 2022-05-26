"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cylinder_1 = require("./Cylinder");
var Circle_1 = require("./Circle");
var circle = new Circle_1.Circle(2.0, "blue");
console.log(circle.toString());
var cylinder = new Cylinder_1.Cylinder(1.0, "black", 20);
console.log(cylinder.toString());
