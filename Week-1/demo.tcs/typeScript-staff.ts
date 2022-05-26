class Staff {
     name: string;
     email: string;
     age: number;
    constructor(name:string,email:string,age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName():string {
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    getEmail():string{
        return this.email;
    }
    setEmail(email:string){
        this.email = email;
    }
    getAge():number {
        return this.age;

    }
    setAge(age:number){
        this.age = age;


    }



}
let staff = new Staff ("nguyendung","ngnzun@gmail.com",26);
let nametaff =staff.getName();
console.log(nametaff);
staff.setName("haphuong");
let currentNameStaff= staff.getName();
console.log(currentNameStaff);
staff.setAge(18);
let currentAgeStaff = staff.getAge();
console.log(currentAgeStaff);
staff.setEmail("hong.ngn@gmail.com");
let currentEmailStaff = staff.getEmail();
console.log(currentEmailStaff);



