//Cho một mảng các số nguyên chỉ bao gồm các số từ 0 - 10.
// Hãy viết chương trình in ra các số không xuất hiện trong mảng trên.
let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]
const findNumber =(numbers) => {
    let output: number[] = [];
    for (let i = 0; i <10 ; i++) {
      if(numbers.indexOf(i)==-1){
          output.push(i);

      }


    }
    return output;


}
console.log(findNumber(numbers));