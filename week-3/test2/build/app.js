"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByTerm = void 0;
function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(searchTerm);
    });
}
exports.filterByTerm = filterByTerm;
