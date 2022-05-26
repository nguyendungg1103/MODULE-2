var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.Products = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.Products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.Products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
export { ProductManager };
//# sourceMappingURL=ProductManager.js.map