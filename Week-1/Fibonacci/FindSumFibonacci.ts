//Tính tổng các số Fibonacci
function FindFibonacci(number) {
    let a:number =1;
    let b:number= 1;
    let temp:number;
    let fibonacci : string = "";
    let sum : number =0;
    for (let i = 0; i < number ; i++) {
        sum+=a;
        fibonacci += a + " ";
        temp = a + b;
        a = b;
        b = temp;
        console.log(fibonacci);
    }
    console.log(sum);
}
FindFibonacci(10);