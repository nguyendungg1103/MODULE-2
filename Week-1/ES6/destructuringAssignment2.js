var myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
];
function detectCollistion(objects, point) {
    var x = point.x, y = point.y;
    return objects.find(function (e) {
        var x1 = e.x, y1 = e.y, width = e.width, height = e.height;
        return (x >= x1 && x <= x1 + width && y >= y1 && y <= y1 + height);
    });
}
console.log(detectCollistion(myObjects, { x: 4, y: 2 }));
