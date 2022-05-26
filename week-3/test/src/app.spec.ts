import {doST} from "./app";

describe('doST', function () {
    test('adds 1 + 2 to equal 3', () => {
        expect(doST(1, 2,5)).toBe(8);
    });
});