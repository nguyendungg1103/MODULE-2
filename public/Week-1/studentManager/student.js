var Student = /** @class */ (function () {
    function Student(name, group, point) {
        this.name = name;
        this.group = group;
        this.point = point;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    Student.prototype.setGroup = function (group) {
        this.group = group;
    };
    return Student;
}());
export { Student };
//# sourceMappingURL=student.js.map