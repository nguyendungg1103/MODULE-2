import {Student} from "./Student";

export class StudentScoreManagement<T> {
    head: Student<T> | null;
    tail: Student<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number): void {
        let student = new Student(name, score);
        student.next = this.head;
        this.head = student;

        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    }

    insertLast(name: string, score: number): void {
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let student = new Student(name, score);
            this.tail.next = student;
            this.tail = student;
            this.size++;
        }
    }

    showList(): any {
        let listData = [];
        let currentStudent = this.head;

        while (currentStudent !== null) {
            listData.push(currentStudent.getStudent());
            currentStudent = currentStudent.next
        }
        return listData;
    }

    totalStudentsFail(): any {
        let totalStudent: Student<T> [] = [];
        let currentStudent = this.head;
        while (currentStudent) {
            if (currentStudent.score <= 5) {
                totalStudent.push(currentStudent.getStudent())
            }
            currentStudent = currentStudent.next;
        }
        return totalStudent;

    }

    listStudentMaxScore() {
        let listStudentMaxScore: Student<any>[] = [];
        let currentStudent = this.head;
        let StudentMaxScore = currentStudent.score;
        while (currentStudent !== null) {
            if (currentStudent.score > StudentMaxScore) {
                StudentMaxScore = currentStudent.score

            }
            currentStudent = currentStudent.next;
        }
        let currentStudent2 = this.head;
        while (currentStudent2) {
            if (currentStudent2.score === StudentMaxScore) {
                listStudentMaxScore.push(currentStudent2)
            }
            currentStudent2 = currentStudent2.next;
        }
        return listStudentMaxScore;

    }
    findByName(name:string) :void{
        let findStudent =[];
        let currentStudent = this.head;
        while (currentStudent){
            if(currentStudent.name === name) {
                findStudent.push(currentStudent)
            }
            currentStudent = currentStudent.next;
        }

        if(findStudent.length) {
            findStudent.forEach((student)=>{
                console.log(student.name, student.score);
            })
        } else {
            console.log("Not fond ", name)
        }

    }


}