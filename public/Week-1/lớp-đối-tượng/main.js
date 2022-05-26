import StopWatch from "./StopWatch";
var time = new StopWatch();
setTimeout(function () {
    console.log(time.stop());
    console.log(time.getElapsedTime());
}, 1000);
//# sourceMappingURL=main.js.map