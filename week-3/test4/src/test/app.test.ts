import {Calculator} from '../app'

describe("add function", () => {
    test("add two number", () => {
        const number1 = 1;
        const number2 = 4;

        const result = 5;

        expect(Calculator.add(number1, number2)).toBe(result);
    });
});

describe("add function", () => {
    test("add two number", () => {
        const number1 = 4;
        const number2 = 4;

        const result = 8;

        expect(Calculator.add(number1, number2)).toBe(result);
    });
});

describe("add function", () => {
    test("add two number", () => {
        const number1 = 1;
        const number2 = 2;

        const result = 3;

        expect(Calculator.add(number1, number2)).toBe(result);
    });
});