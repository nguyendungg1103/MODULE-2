var DistanceCircle = /** @class */ (function () {
    function DistanceCircle(x, y) {
        this.displayName = "point";
        this.x = x;
        this.y = y;
    }
    DistanceCircle.prototype.distance = function (b) {
        var dx = this.x - b.x;
        var dy = this.y - b.y;
        return Math.hypot(dx, dy);
    };
    return DistanceCircle;
}());
export { DistanceCircle };
var point1 = new DistanceCircle(4, 5);
var point2 = new DistanceCircle(6, 7);
console.log(point1.distance(7));
//# sourceMappingURL=file.js.map