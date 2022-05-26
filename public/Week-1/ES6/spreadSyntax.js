var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var replace = function (array, from, to, elements) {
    // array.splice.apply(array, [from, to - from].concat(elements))
    array.splice.apply(array, __spreadArray([from, to - from], elements, false));
};
var testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);
var copyReplace = function (array, from, to, elements) {
    return __spreadArray(__spreadArray(__spreadArray([], array.slice(0, from), true), elements, true), array.slice(to), true);
};
var testArray2 = [1, 2, 100, 100, 6];
var copyArray = copyReplace(testArray2, 2, 4, [2, 4, 5]);
console.log(testArray2);
console.log(copyArray);
var customerOrder = [];
var recordOrder = function (time) {
    var drinks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        drinks[_i - 1] = arguments[_i];
    }
    customerOrder.push(({ time: time, bird: drinks }));
};
recordOrder(new Date, "coffee", "yakul", "pizza");
console.log(customerOrder);
//# sourceMappingURL=spreadSyntax.js.map