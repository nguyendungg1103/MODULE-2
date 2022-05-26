var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AbstractTree } from "./abstract/AbstractTree";
var BST = /** @class */ (function (_super) {
    __extends(BST, _super);
    function BST() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 0;
        return _this;
    }
    BST.prototype.BST = function (objects) {
        for (var i = 0; i < objects.length; i++)
            this.insert(objects[i]);
    };
    return BST;
}(AbstractTree));
export { BST };
//# sourceMappingURL=BTS.js.map