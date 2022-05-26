import {User} from "./xay-dung-lop-user";
import {Role} from "./user";

let admin = new User("Admin1", "hello.meo@gmail.com", Role.ADMIN);
let Nguyendung = new User("nguyendung", "hello.dung@gmail.com", Role.USER);

console.log(admin.getInfo())
admin.isAdmin(); // true

console.log(Nguyendung.getInfo())
Nguyendung.isAdmin(); // false