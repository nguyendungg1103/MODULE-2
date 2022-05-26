"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(month, salary) {
        this._next = null;
        this._month = month;
        this._salary = salary;
        this._next = null;
    }
    Object.defineProperty(Staff.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.getStaff = function () {
        return { month: this._month,
            salary: this._salary };
    };
    return Staff;
}());
exports.Staff = Staff;
