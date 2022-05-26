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
export default Employee;
//# sourceMappingURL=Employee.js.map