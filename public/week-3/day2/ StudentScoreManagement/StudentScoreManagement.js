import { Student } from "./Student";
var StudentScoreManagement = /** @class */ (function () {
    function StudentScoreManagement() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentScoreManagement.prototype.insertFirst = function (name, score) {
        var student = new Student(name, score);
        student.next = this.head;
        this.head = student;
        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    };
    StudentScoreManagement.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var student = new Student(name, score);
            this.tail.next = student;
            this.tail = student;
            this.size++;
        }
    };
    StudentScoreManagement.prototype.showList = function () {
        var listData = [];
        var currentStudent = this.head;
        while (currentStudent !== null) {
            listData.push(currentStudent.getStudent());
            currentStudent = currentStudent.next;
        }
        return listData;
    };
    StudentScoreManagement.prototype.totalStudentsFail = function () {
        var totalStudent = [];
        var currentStudent = this.head;
        while (currentStudent) {
            if (currentStudent.score <= 5) {
                totalStudent.push(currentStudent.getStudent());
            }
            currentStudent = currentStudent.next;
        }
        return totalStudent;
    };
    StudentScoreManagement.prototype.listStudentMaxScore = function () {
        var listStudentMaxScore = [];
        var currentStudent = this.head;
        var StudentMaxScore = currentStudent.score;
        while (currentStudent !== null) {
            if (currentStudent.score > StudentMaxScore) {
                StudentMaxScore = currentStudent.score;
            }
            currentStudent = currentStudent.next;
        }
        var currentStudent2 = this.head;
        while (currentStudent2) {
            if (currentStudent2.score === StudentMaxScore) {
                listStudentMaxScore.push(currentStudent2);
            }
            currentStudent2 = currentStudent2.next;
        }
        return listStudentMaxScore;
    };
    StudentScoreManagement.prototype.findByName = function (name) {
        var findStudent = [];
        var currentStudent = this.head;
        while (currentStudent) {
            if (currentStudent.name === name) {
                findStudent.push(currentStudent);
            }
            currentStudent = currentStudent.next;
        }
        if (findStudent.length) {
            findStudent.forEach(function (student) {
                console.log(student.name, student.score);
            });
        }
        else {
            console.log("Not fond ", name);
        }
    };
    return StudentScoreManagement;
}());
export { StudentScoreManagement };
//# sourceMappingURL=StudentScoreManagement.js.map