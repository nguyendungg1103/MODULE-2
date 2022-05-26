import { Country } from "./Country";
import { SeaGame } from "./SeaGame";
var vn = new Country("VN", 10, 11, 14);
var tl = new Country("TL", 15, 13, 14);
var hq = new Country("HQ", 12, 13, 13);
var nb = new Country("NB", 12, 13, 13);
var seaGame = new SeaGame();
seaGame.add(vn, tl, hq, nb);
// console.log(seaGame.showAll());
console.log(seaGame.bblSort());
//# sourceMappingURL=main.js.map