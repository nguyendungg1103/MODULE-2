export class Queue<T> {
    private container: T[] = [];

    constructor() {
    }

    getContainer(): T[] {
        return this.container;

    }

    enqueue(items: T): number {
        this.container.push(items);
        return this.container.length;

    }

    dequeue(): T | undefined {
        return this.container.shift()
    }

    size(): number {
        return this.container.length

    }

    deQueue(): any {
        if (this.size() > 0) {
            let item = this.container[0];
            this.container.shift();
            return item;

        } else {
            return 1;
        }


    }
}