var FizzBuzz = /** @class */ (function () {
    function FizzBuzz(n) {
        var Fizz = n % 5 == 0;
        var Buzz = n % 3 == 0;
        if (Buzz && Buzz) {
            this.message = 'FizzBuzz';
        }
        else if (Fizz) {
            this.message = 'Fizz';
        }
        else if (Buzz) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
    return FizzBuzz;
}());
export { FizzBuzz };
//# sourceMappingURL=Refactoring.js.map