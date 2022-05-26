function countElement(sub, str) {
    let count =0;
    for (let i = 0; i < str.length; ++i) {
        if (str.substring (i, i + sub.length) == sub)
        {
            count += 1;
        }
    }
    return count;

}

let str = "1, 2, 3, 4, 5, 6, 7, 8";
let sub = "4, 5, 6";
let result = countElement(sub,str);
console.log(result);