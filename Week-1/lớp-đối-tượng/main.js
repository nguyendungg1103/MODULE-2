"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWatch_1 = require("./StopWatch");
var time = new StopWatch_1.default();
setTimeout(function () {
    console.log(time.stop());
    console.log(time.getElapsedTime());
}, 1000);
