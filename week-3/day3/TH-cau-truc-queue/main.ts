import {Queue} from "./Queue";
let queue = new Queue<number>()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
console.log(queue.size());