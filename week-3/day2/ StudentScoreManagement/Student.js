"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getScore = function () {
        return this.score;
    };
    Student.prototype.getStudent = function () {
        return {
            name: this.name, score: this.score
        };
    };
    return Student;
}());
exports.Student = Student;
