let map = new Map();
map.set('22', 'Infosys');
map.set(32, 'TCS');
map.set(false,'Google');
map.set('45','Facebook');
map.set('65','Amazon');
console.log("Employer at index 22: " +map.get('22'));
console.log("Employer at index 32: " +map.get(32));
console.log("Size of the map: " +map.size);
console.log("Deleting a value: " +map.delete('65'));
console.log( "New Size of the map: " +map.size);
let employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", 24);
//Iterating over map keys
for (let name of employeeMap.keys()) {
    console.log("Employee Names= " +name);
}
for (let age of employeeMap.values()) {
    console.log("Employee Age= " +age);
}
console.log("The employeeMap Entries are: ");
for (let entry of employeeMap.entries()) {
    console.log(entry[0], entry[1]);
}