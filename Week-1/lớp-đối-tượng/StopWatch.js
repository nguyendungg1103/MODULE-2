"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this._startTime = new Date().getMilliseconds();
    }
    StopWatch.prototype.reset = function () {
        this._startTime = (new Date()).getMilliseconds();
    };
    StopWatch.prototype.stop = function () {
        return this._endTime = new Date().getMilliseconds();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this._endTime - this._startTime;
    };
    return StopWatch;
}());
exports.default = StopWatch;
