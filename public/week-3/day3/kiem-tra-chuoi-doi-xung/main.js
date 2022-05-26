import { Stack } from "./stack";
import { Queue } from "./Queue";
var str = "able was I ere I saw elba";
var checkSymmetry = function (str) {
    var stack = new Stack();
    var queue = new Queue();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var item = str_1[_i];
        stack.push(item);
        queue.enqueue(item);
    }
    for (var i = 0; i < str.length; i++) {
        if (stack.top() != queue.deQueue()) {
            return "".concat(str, ": l\u00E0 chu\u1ED7i kh\u00F4ng \u0111\u1ED1i x\u1EE9ng");
        }
    }
    return "".concat(str, ":l\u00E0 chu\u1ED7i \u0111\u1ED1i x\u1EE9ng");
};
console.log(checkSymmetry(str));
//# sourceMappingURL=main.js.map