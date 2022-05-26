import {Student} from "./Student";
import {StudentScoreManagement} from "./StudentScoreManagement";


let studentManager = new StudentScoreManagement();
studentManager.insertFirst('dung',9);
studentManager.insertFirst('trung',7);
studentManager.insertFirst('thinh',4)

console.log(studentManager.totalStudentsFail());
console.log(studentManager.listStudentMaxScore());
console.log(studentManager.findByName("dung"));


