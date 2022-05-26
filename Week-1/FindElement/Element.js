//Cho một mảng các số nguyên chỉ bao gồm các số từ 0 - 10.
// Hãy viết chương trình in ra các số không xuất hiện trong mảng trên.
var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var findNumber = function (numbers) {
    var output = [];
    for (var i = 0; i < 10; i++) {
        if (numbers.indexOf(i) == -1) {
            output.push(i);
        }
    }
    return output;
};
console.log(findNumber(numbers));
