export function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(searchTerm);
    });
}
//# sourceMappingURL=app.js.map