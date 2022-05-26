export class ProductManager{
  private  product = [];
  constructor() {
  }
  get getAll(){
      return this.product;
  }
  set setAdd(product){
    this.product.push(product);
  }

}