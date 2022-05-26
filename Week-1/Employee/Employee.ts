import {Gender} from "./Gender";
class Employee {
    fullname: string;
    gender: Gender;
    email: string;
    birthday: string;
    phonenumbers: string;

    constructor(fullname: string,
                gender: Gender,
                birthday: Date,
                email: string,
                phonenumbers: string) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday.toDateString();
        this.email = email;
        this.phonenumbers = phonenumbers;

    }

}

export default Employee;
