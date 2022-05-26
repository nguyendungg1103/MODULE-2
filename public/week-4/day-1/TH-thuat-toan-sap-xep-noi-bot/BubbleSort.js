var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (list) {
        var needNextPass = true;
        for (var k = 1; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (var i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
        }
    };
    BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
    return BubbleSort;
}());
export { BubbleSort };
//# sourceMappingURL=BubbleSort.js.map