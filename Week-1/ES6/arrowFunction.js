var inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
];
//filter những phần tử có type là machine ra.
var MachineValue = inventory.filter(function (object) { return object.type = "machine"; });
console.log(MachineValue);
//map các value chứa các phần tử đã lọc ra.
var tatolMachineValue = MachineValue.map(function (object) { return object.value; });
console.log(tatolMachineValue);
// reduce để tính tổng các phần tử
var sumValue = tatolMachineValue.reduce(function (prev, current) { return prev + current; });
console.log(sumValue);
