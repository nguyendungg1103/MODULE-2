"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var queue = new Queue_1.Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.size());