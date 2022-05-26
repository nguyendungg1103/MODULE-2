"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe('doST', function () {
    test('adds 1 + 2 to equal 3', function () {
        expect((0, app_1.doST)(1, 2, 5)).toBe(8);
    });
});
