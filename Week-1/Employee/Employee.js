"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phonenumbers) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday.toDateString();
        this.email = email;
        this.phonenumbers = phonenumbers;
    }
    return Employee;
}());
exports.default = Employee;
