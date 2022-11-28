class Product {
  static productCounter = 0;
  constructor(name, price) {
    this._idProduct = ++Product.productCounter;
    this._name = name;
    this._price = price;
  }
  getIdProduct() {
    return this._idProduct;
  }
  getName() {
    return this._name;
  }
  getPrice() {
    return this._price;
  }
  setName(name) {
    this._name = name;
  }
  setPrice(price) {
    this._price = price;
  }
  toString() {
    return `ID: ${this._idProduct}-${this._name} for:  \$${this._price} dollars`;
  }
}
class Order {
  static orderCounter = 0;
  static get MAX_PRODUCT() {
    return 5;
  }
  constructor() {
    this._idOrder = ++Order.orderCounter;
    this._product = [];
    this._addProductsCounter = 0;
  }
}

let product1 = new Product("Pen", "1");
let product2 = new Product("PC", "800");
console.log(product1.toString());
console.log(product2.toString());
