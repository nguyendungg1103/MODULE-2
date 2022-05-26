var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (item) {
        this.container.push(item);
        return this.container.length;
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    Stack.prototype.getContainer = function () {
        return this.container;
    };
    return Stack;
}());
export { Stack };
//# sourceMappingURL=stack.js.map