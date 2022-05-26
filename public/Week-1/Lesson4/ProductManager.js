var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.product = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "setAdd", {
        set: function (product) {
            this.product.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
export { ProductManager };
//# sourceMappingURL=ProductManager.js.map