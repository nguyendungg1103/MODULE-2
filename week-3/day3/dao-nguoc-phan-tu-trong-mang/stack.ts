export class Stack<T> {
    private container: T[] = [];

    constructor() {
    }

    push(item: T): number {
        this.container.push(item);
        return this.container.length;
    }

    pop(): T | undefined {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }
    getContainer():any {
        return this.container


    }

}