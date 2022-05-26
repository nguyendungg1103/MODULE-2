"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
function reverse() {
    var stack = new stack_1.Stack();
    var stackReverse = new stack_1.Stack();
    var number = "123456";
    for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
        var num = number_1[_i];
        console.log(num);
        stack.push(+num);
    }
    var size = stack.size();
    for (var i = 0; i < size; i++) {
        stackReverse.push(stack.pop());
    }
    return stackReverse.getContainer();
}
console.log(reverse());
