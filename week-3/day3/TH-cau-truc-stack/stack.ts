export class Stack<T>{
    container: T []=[];
    constructor() {
    }
    push(data:T): any {
        this.container.push(data);

    }
    pop():T{
        return this.container.pop();
    }
    size():any{
         this.container.length;

    }

}