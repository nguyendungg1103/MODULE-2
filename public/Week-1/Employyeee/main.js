import Staff from "./Employeee";
import { gender } from "./Gender";
var staff1 = [];
staff1.push(new Staff("Nguyendung", gender.female, "hggugyu@gmail.com", "7-7-1995", +84965924266));
staff1.push(new Staff("nguyentrang", gender.female, "hggugyu2@gmail.com", "7-4-1995", +84965974266));
staff1.push(new Staff("Nguyendan", gender.female, "hggugyu3@gmail.com", "8-7-1995", +84966924266));
var staff = function (staff1) {
    console.log(staff1);
};
staff1.forEach(staff);
console.log(staff1);
//# sourceMappingURL=main.js.map