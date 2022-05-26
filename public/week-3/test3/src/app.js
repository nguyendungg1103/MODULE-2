export function filterByTerm(arr, pattern) {
    return arr.filter(function (item) {
        return item.url.match(pattern);
    });
}
//# sourceMappingURL=app.js.map