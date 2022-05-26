function InsertionSort(array) {
    let size = array.length;
    for (let i = 1; i < size; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            --j;
        }
        array[j+1]= key;

    }

}
let  arr = [3, 5, -2, 14, -9, 30];
InsertionSort(arr);
console.log(arr)