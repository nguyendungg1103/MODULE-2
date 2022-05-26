"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employeee_1 = require("./Employeee");
var Gender_1 = require("./Gender");
var staff1 = [];
staff1.push(new Employeee_1.default("Nguyendung", Gender_1.gender.female, "hggugyu@gmail.com", "7-7-1995", +84965924266));
staff1.push(new Employeee_1.default("nguyentrang", Gender_1.gender.female, "hggugyu2@gmail.com", "7-4-1995", +84965974266));
staff1.push(new Employeee_1.default("Nguyendan", Gender_1.gender.female, "hggugyu3@gmail.com", "8-7-1995", +84966924266));
var staff = function (staff1) {
    console.log(staff1);
};
staff1.forEach(staff);
console.log(staff1);
