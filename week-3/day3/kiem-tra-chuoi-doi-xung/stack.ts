export class Stack<T> {
    private container: T[] = [];

    constructor() {
    }

    getContainer(): T[] {
        return this.container;

    }

    push(data: T): number {
        this.container.push();
        return this.container.length


    }

    pop():T | undefined {
       return  this.container.pop()
    }
    size(): Number{
        return this.container.length;

    }
    top():T | any {
        if(this.size()>0){
            let item = this.container[this.container.length-1];
            this.container.pop();
            return item;
        } else {
            return 1;
        }
    }


}
