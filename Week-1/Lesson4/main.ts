import {Product} from "./TH-Product";
import {ProductManager} from "./ProductManager";
let mobile1 = new Product("iphone",15000);
let mobile2 = new Product("samsung",16000);
let ProductManager1 = new ProductManager();
ProductManager1.setAdd = mobile1;
ProductManager1.setAdd = mobile2;
console.log(ProductManager1.getAll);