import {Country} from "./Country";
import {SeaGameTable} from "./SeaGameTable";

let VietNam = new Country("VietNam", 68,46,41)
let Thailand = new Country("ThaiLand", 24,23,41)
let Philippines = new Country("Philippines", 20,27,37)
let Indonesia = new Country("Indonesia", 18,27,37)


let standingTable = new SeaGameTable()
standingTable.insertCountry(Philippines,Thailand,Indonesia,VietNam)
// console.log(standingTable.countryTable);


standingTable.bubbleSort();
// console.log(standingTable.showAll());
standingTable.countryTable.forEach(element => {
    console.log(element.name, `Gold ${element.gold}`, `Gold ${element.silver}`,`Gold ${element.bronze}`,`total metal ${element.total}`)
})