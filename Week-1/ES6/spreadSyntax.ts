let  replace = (array, from, to, elements) =>{

    // array.splice.apply(array, [from, to - from].concat(elements))
     array.splice(from,to - from,...elements)
}
let testArray = [1, 2, 100, 100, 6]
 replace(testArray, 2, 4, [3, 4, 5])
 console.log(testArray)


 let copyReplace = (array, from, to, elements)=>{
    return [...array.slice(0, from),...elements,...array.slice(to)]
}
let testArray2 = [1, 2, 100, 100, 6];
let copyArray = copyReplace(testArray2,2,4,[2,4,5]);
console.log(testArray2);
console.log(copyArray);
const customerOrder = [];
let recordOrder = (time,...drinks) =>{
    customerOrder.push(({time,bird:drinks}))

}
recordOrder(new Date,"coffee","yakul","pizza");
console.log(customerOrder)


