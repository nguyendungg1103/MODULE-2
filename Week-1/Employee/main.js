"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Gender_1 = require("./Gender");
var employeeList = [];
employeeList.push(new Employee_1.default("Nguyen Van A", Gender_1.Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", '0123456789'));
employeeList.push(new Employee_1.default("Tran Thi A", Gender_1.Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", '0123456790'));
employeeList.push(new Employee_1.default("Huynh An Nhien", Gender_1.Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", '023456791'));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach((showEmployee));
console.log(employeeList);
