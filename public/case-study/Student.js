var Student = /** @class */ (function () {
    function Student(name, code, date) {
        this._name = name;
        this._code = code;
        this._date = date;
    }
    Student.prototype.getName = function () {
        return this._name;
    };
    Student.prototype.setName = function (value) {
        this._name = value;
    };
    Student.prototype.getCode = function () {
        return this._code;
    };
    Student.prototype.setCode = function (value) {
        this._code = value;
    };
    Student.prototype.getDate = function () {
        return this._date;
    };
    Student.prototype.setDate = function (value) {
        this._date = value;
    };
    return Student;
}());
export { Student };
//# sourceMappingURL=Student.js.map