import {gender} from "./Gender";

class Staff {
    fullName: string;
    gender: gender;
    email: string;
    birthOfDay: string;
    phoneNumbers: number;

    constructor(fullName: string,
                gender: gender,
                email : string,
                birthOfDay: string,
                phoneNumbers: number) {
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.birthOfDay= birthOfDay;
        this.phoneNumbers = phoneNumbers;


    }
}
export default Staff;
