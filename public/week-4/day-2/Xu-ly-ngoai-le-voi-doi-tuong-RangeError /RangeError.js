function calculator(number1, number2, operator) {
    var result;
    if (Number.isInteger(number1) || Number.isInteger(number2)) {
        throw new RangeError('nhap so');
    }
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw new RangeError('the operator must be an +,-,*,/');
    }
    return result;
}
try {
    calculator(3, "k", "%");
}
catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message);
    }
}
// console.log(calculator(3,9,"%"));
//# sourceMappingURL=RangeError.js.map