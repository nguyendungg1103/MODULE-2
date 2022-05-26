import {RegularExpression} from "./RegularExpression";
function checkNameClass(nameClass) {
    let pattern =  /^(C|A|P)[0-9]{4}(G|H|I|K)$/;
    let result = pattern.test(nameClass)
    return result;

}
let input = "C0222H"

console.log(checkNameClass(input))