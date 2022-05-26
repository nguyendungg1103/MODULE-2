import {Country} from "./Country";
import {SeaGame} from "./SeaGame";

let vn = new Country("VN",10,11,14);
let tl = new Country("TL",15,13,14);
let hq = new Country("HQ",12,13,13);
let nb = new Country("NB",12,13,13);

let seaGame = new SeaGame();
seaGame.add(vn,tl,hq,nb);
// console.log(seaGame.showAll());
console.log(seaGame.bblSort());
