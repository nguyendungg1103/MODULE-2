import { NextDayCalculator } from "../NextDayCalculator";
describe("add function", function () {
    test("add two number", function () {
        var result = "Day: 1 , Month: 3 , Year: 2018";
        expect(NextDayCalculator.nextDay(28, 2, 2018)).toBe(result);
    });
});
//# sourceMappingURL=NextDayCalculator.test.js.map