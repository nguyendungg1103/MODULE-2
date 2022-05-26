"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tiger_1 = require("./Tiger");
var chicken_1 = require("./chicken");
var Apple_1 = require("./Fruits/Apple");
var Orange_1 = require("./Fruits/Orange");
var animal = [];
animal[0] = new Tiger_1.Tiger();
animal[2] = new chicken_1.Chicken();
animal.forEach(function (itemt, index) {
    console.log(itemt.makeSound());
    if (itemt instanceof chicken_1.Chicken) {
        console.log(itemt.howToEat());
    }
});
console.log("----fruits----");
var fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach(function (itemt) {
    console.log(itemt.howToEat());
});
