import {Stack} from "./stack";
import {Queue} from "./Queue";

let str = "able was I ere I saw elba";
const checkSymmetry = (str) => {

    const stack = new Stack<string>();
    const queue = new Queue<string>();
    for (let item of str) {
        stack.push(item);
        queue.enqueue(item);

    }
    for (let i = 0; i < str.length; i++) {
        if (stack.top() != queue.deQueue()) {
            return `${str}: là chuỗi không đối xứng`
        }
    }
    return `${str}:là chuỗi đối xứng`
}
console.log(checkSymmetry(str))