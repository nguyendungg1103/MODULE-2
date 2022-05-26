class Intructor{
    constructor({name,role="assisrant"}={}) {
        this.role = role;
        this.name = name;
    }
    renderDetails(){
        console.log(`${this.name}-${this.role}`);

    }
    static hello(){
        console.log("hi hello");
    }
    static canTeach(Intructor){
        return(Intructor.role==="classroom")
    }
}
let junnioIntructor = new Intructor({"name":"vhgfgj"});
let sennioIntructor = new Intructor({"name":"vhgfgj","role":"classroom"});
junnioIntructor.renderDetails()
sennioIntructor.renderDetails()
Intructor.hello()
console.log(`${junnioIntructor.name} can Teach ${Intructor.canTeach(junnioIntructor)}`)
console.log(`${junnioIntructor.name} can Teach ${Intructor.canTeach(sennioIntructor)}`)

