var StudentManager = /** @class */ (function () {
    function StudentManager() {
    }
    StudentManager.prototype.getALL = function () {
        return this.student;
    };
    StudentManager.prototype.setAdd = function (student) {
        this.student.push(student);
    };
    return StudentManager;
}());
export { StudentManager };
//# sourceMappingURL=StudentManager.js.map