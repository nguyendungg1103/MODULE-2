var SeaGame = /** @class */ (function () {
    function SeaGame() {
        this.bl = false;
        this.arr = [];
    }
    SeaGame.prototype.add = function () {
        var _a;
        var country = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            country[_i] = arguments[_i];
        }
        (_a = this.arr).push.apply(_a, country);
    };
    SeaGame.prototype.bblSort = function () {
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < (this.arr.length - i - 1); j++) {
                if (this.sort(this.arr[j], this.arr[j + 1])) {
                    var temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                    this.bl = false;
                }
            }
        }
        return this.arr;
    };
    SeaGame.prototype.sort = function (arr1, arr2) {
        if (arr1.gold < arr2.gold) {
            this.bl = true;
        }
        else if (arr1.gold == arr2.gold) {
            if (arr1.silver < arr2.silver) {
                this.bl = true;
            }
            else if (arr1.silver == arr2.silver) {
                if (arr1.bronze < arr2.bronze) {
                    this.bl = true;
                }
                else if (arr1.bronze == arr2.bronze) {
                    if (arr1.name.localeCompare(arr2.name) == -1) {
                        this.bl = true;
                    }
                }
            }
        }
        return this.bl;
    };
    SeaGame.prototype.showAll = function () {
        return this.arr;
    };
    return SeaGame;
}());
export { SeaGame };
//# sourceMappingURL=SeaGame.js.map