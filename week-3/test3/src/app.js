"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByTerm = void 0;
function filterByTerm(arr, pattern) {
    return arr.filter(function (item) {
        return item.url.match(pattern);
    });
}
exports.filterByTerm = filterByTerm;
