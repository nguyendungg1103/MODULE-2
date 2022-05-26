import {Product} from "./Product";

export class ProductManager{
     Products: Product[] = [];

     get getAll(): Product[]{
        return this.Products;

    }
    set add(product: Product){
        this.Products.push(product)

    }

}