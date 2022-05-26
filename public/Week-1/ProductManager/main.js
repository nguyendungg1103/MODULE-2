import { Product } from "./Product";
import { ProductManager } from "./ProductManager";
var laptop = new Product("Laptop", 20000);
var iphone = new Product("Iphone", 10000);
var productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
//# sourceMappingURL=main.js.map