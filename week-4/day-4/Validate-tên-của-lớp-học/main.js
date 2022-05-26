"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkNameClass(nameClass) {
    var pattern = /^(C|A|P)[0-9]{4}(G|H|I|K)$/;
    var result = pattern.test(nameClass);
    return result;
}
var input = "C0222H";
console.log(checkNameClass(input));
