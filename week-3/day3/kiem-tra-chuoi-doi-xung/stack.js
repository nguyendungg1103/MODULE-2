"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.getContainer = function () {
        return this.container;
    };
    Stack.prototype.push = function (data) {
        this.container.push();
        return this.container.length;
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    Stack.prototype.top = function () {
        if (this.size() > 0) {
            var item = this.container[this.container.length - 1];
            this.container.pop();
            return item;
        }
        else {
            return 1;
        }
    };
    return Stack;
}());
exports.Stack = Stack;
