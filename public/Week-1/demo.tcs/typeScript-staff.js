var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff("nguyendung", "ngnzun@gmail.com", 26);
var nametaff = staff.getName();
console.log(nametaff);
staff.setName("haphuong");
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
staff.setAge(18);
var currentAgeStaff = staff.getAge();
console.log(currentAgeStaff);
staff.setEmail("hong.ngn@gmail.com");
var currentEmailStaff = staff.getEmail();
console.log(currentEmailStaff);
//# sourceMappingURL=typeScript-staff.js.map