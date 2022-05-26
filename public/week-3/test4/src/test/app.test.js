import { Calculator } from '../app';
describe("add function", function () {
    test("add two number", function () {
        var number1 = 1;
        var number2 = 4;
        var result = 5;
        expect(Calculator.add(number1, number2)).toBe(result);
    });
});
describe("add function", function () {
    test("add two number", function () {
        var number1 = 4;
        var number2 = 4;
        var result = 8;
        expect(Calculator.add(number1, number2)).toBe(result);
    });
});
describe("add function", function () {
    test("add two number", function () {
        var number1 = 1;
        var number2 = 2;
        var result = 3;
        expect(Calculator.add(number1, number2)).toBe(result);
    });
});
//# sourceMappingURL=app.test.js.map