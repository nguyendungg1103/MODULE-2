import { Product } from "./TH-Product";
import { ProductManager } from "./ProductManager";
var mobile1 = new Product("iphone", 15000);
var mobile2 = new Product("samsung", 16000);
var ProductManager1 = new ProductManager();
ProductManager1.setAdd = mobile1;
ProductManager1.setAdd = mobile2;
console.log(ProductManager1.getAll);
//# sourceMappingURL=main.js.map