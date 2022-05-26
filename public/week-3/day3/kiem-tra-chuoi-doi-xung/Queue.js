var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.getContainer = function () {
        return this.container;
    };
    Queue.prototype.enqueue = function (items) {
        this.container.push(items);
        return this.container.length;
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    Queue.prototype.deQueue = function () {
        if (this.size() > 0) {
            var item = this.container[0];
            this.container.shift();
            return item;
        }
        else {
            return 1;
        }
    };
    return Queue;
}());
export { Queue };
//# sourceMappingURL=Queue.js.map