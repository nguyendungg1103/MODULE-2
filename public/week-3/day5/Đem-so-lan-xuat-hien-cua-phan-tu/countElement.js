function countElement(sub, str) {
    var count = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str.substring(i, i + sub.length) == sub) {
            count += 1;
        }
    }
    return count;
}
var str = "1, 2, 3, 4, 5, 6, 7, 8";
var sub = "4, 5, 6";
var result = countElement(sub, str);
console.log(result);
//# sourceMappingURL=countElement.js.map