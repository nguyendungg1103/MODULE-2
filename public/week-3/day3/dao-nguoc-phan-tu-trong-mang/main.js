import { Stack } from "./stack";
function reverse() {
    var stack = new Stack();
    var stackReverse = new Stack();
    var number = "123456";
    for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
        var num_1 = number_1[_i];
        stack.push(+num_1);
    }
    var size = stack.size();
    for (var i = 0; i < size; i++) {
        stackReverse.push(stack.pop());
    }
    return stackReverse.getContainer();
}
console.log(reverse());
//# sourceMappingURL=main.js.map