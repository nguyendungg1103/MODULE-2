export  class Student{
    name: string;
    group : string;
    point : string;
    constructor(name:string,
                group:string,
                point:string) {
        this.name = name;
        this.group = group;
        this.point = point;
    }
    getName(){
        return this.name;

    }
    setName(name:string){
        this.name = name;

    }
    getGroup(){
        return this.group;

    }
    setGroup(group:string){
        this.group = group;

    }
}