var map = new Map();
map.set('22', 'Infosys');
map.set(32, 'TCS');
map.set(false, 'Google');
map.set('45', 'Facebook');
map.set('65', 'Amazon');
console.log("Employer at index 22: " + map.get('22'));
console.log("Employer at index 32: " + map.get(32));
console.log("Size of the map: " + map.size);
console.log("Deleting a value: " + map.delete('65'));
console.log("New Size of the map: " + map.size);
var employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", 24);
//Iterating over map keys
for (var _i = 0, _a = employeeMap.keys(); _i < _a.length; _i++) {
    var name_1 = _a[_i];
    console.log("Employee Names= " + name_1);
}
for (var _b = 0, _c = employeeMap.values(); _b < _c.length; _b++) {
    var age = _c[_b];
    console.log("Employee Age= " + age);
}
console.log("The employeeMap Entries are: ");
for (var _d = 0, _e = employeeMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
//# sourceMappingURL=company-info.js.map