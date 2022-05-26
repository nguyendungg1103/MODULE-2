"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
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
exports.ProductManager = ProductManager;
