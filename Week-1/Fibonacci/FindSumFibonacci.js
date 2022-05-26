//Tính tổng các số Fibonacci
function FindFibonacci(number) {
    var a = 1;
    var b = 1;
    var temp;
    var fibonacci = "";
    var sum = 0;
    for (var i = 0; i < number; i++) {
        sum += a;
        fibonacci += a + " ";
        temp = a + b;
        a = b;
        b = temp;
        console.log(fibonacci);
    }
    console.log(sum);
}
FindFibonacci(10);
