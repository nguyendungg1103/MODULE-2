var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.container.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    return Queue;
}());
export { Queue };
//# sourceMappingURL=Queue.js.map