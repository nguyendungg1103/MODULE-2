var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
export { Product };
//# sourceMappingURL=Product.js.map