import {Stack} from "./stack";

function reverse() {
    const stack = new Stack<any>();
    const stackReverse = new Stack<any>();
    let number = "123456";
    for (let num of number) {
        stack.push(+num);
    }
    let size = stack.size();
    for (let i = 0; i < size; i++) {
        stackReverse.push(stack.pop())
    }
    return stackReverse.getContainer()
}

console.log(reverse())