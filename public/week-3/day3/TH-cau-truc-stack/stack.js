var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (data) {
        this.container.push(data);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        this.container.length;
    };
    return Stack;
}());
export { Stack };
//# sourceMappingURL=stack.js.map