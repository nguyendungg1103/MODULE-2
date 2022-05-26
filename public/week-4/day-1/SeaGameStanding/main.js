import { Country } from "./Country";
import { SeaGameTable } from "./SeaGameTable";
var VietNam = new Country("VietNam", 68, 46, 41);
var Thailand = new Country("ThaiLand", 24, 23, 41);
var Philippines = new Country("Philippines", 20, 27, 37);
var Indonesia = new Country("Indonesia", 18, 27, 37);
var standingTable = new SeaGameTable();
standingTable.insertCountry(Philippines, Thailand, Indonesia, VietNam);
// console.log(standingTable.countryTable);
standingTable.bubbleSort();
// console.log(standingTable.showAll());
standingTable.countryTable.forEach(function (element) {
    console.log(element.name, "Gold ".concat(element.gold), "Gold ".concat(element.silver), "Gold ".concat(element.bronze), "total metal ".concat(element.total));
});
//# sourceMappingURL=main.js.map