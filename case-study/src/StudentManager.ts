export class StudentManager {
    public student: any[]= [];

    constructor() {
        this.student = []
    }

    getALL() {
        return this.student;
    }

    setAdd(student) {
        this.student.push(student);
    }
}