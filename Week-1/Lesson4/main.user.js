"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xay_dung_lop_user_1 = require("./xay-dung-lop-user");
var user_1 = require("./user");
var admin = new xay_dung_lop_user_1.User("Admin1", "hello.meo@gmail.com", user_1.Role.ADMIN);
var Nguyendung = new xay_dung_lop_user_1.User("nguyendung", "hello.dung@gmail.com", user_1.Role.USER);
console.log(admin.getInfo());
admin.isAdmin(); // true
console.log(Nguyendung.getInfo());
Nguyendung.isAdmin(); // false
