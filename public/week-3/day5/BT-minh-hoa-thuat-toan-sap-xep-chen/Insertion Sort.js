function InsertionSort(array) {
    var size = array.length;
    for (var i = 1; i < size; i++) {
        var key = array[i];
        var j = i - 1;
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            --j;
        }
        array[j + 1] = key;
    }
}
var arr = [3, 5, -2, 14, -9, 30];
InsertionSort(arr);
console.log(arr);
//# sourceMappingURL=Insertion%20Sort.js.map