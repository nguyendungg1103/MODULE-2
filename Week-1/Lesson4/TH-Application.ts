 class THApplication {
    private name:string;
    static count:number =0;
    constructor(name:string) {
     this.name = name;
     THApplication.count++;

    }
 }

 console.log(THApplication.count);
let app1 = new THApplication("app 1");
let app2 = new THApplication("app 2");
 console.log(THApplication.count)