var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.container = [];
    }
    ArrayList.prototype.add = function (data) {
        this.container.push(data);
    };
    ArrayList.prototype.get = function (index) {
        return this.container[index];
    };
    ArrayList.prototype.remove = function () {
        this.container.pop();
    };
    ArrayList.prototype.size = function () {
        return this.container.length;
    };
    return ArrayList;
}());
export { ArrayList };
//# sourceMappingURL=ArrayList.js.map