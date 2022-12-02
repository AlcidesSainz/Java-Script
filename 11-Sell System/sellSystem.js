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
    //this._addProductsCounter = 0;
  }
  getidOrder() {
    return this._idOrder;
  }
  addProduct(product) {
    if (this._product.length < Order.MAX_PRODUCT) {
      this._product.push(product);
    } else {
      console.log("Can't add more products");
    }
  }
  total() {
    let totalSells = 0;
    for (let product of this._product) {
      totalSells += product._price;
    }
    return totalSells;
  }
  showOrder() {
    let orderProduct = " ";
    for (let products of this._product) {
      orderProduct += products.toString() + "\n";
    }
    console.log(
      `Order: ${
        this._idOrder
      } Total: $${this.total()} \nProducts:\n${orderProduct}`
    );
  }
}

let product1 = new Product("Pen", 100);
let product2 = new Product("PC", 800);
let product3 = new Product("Laptop", 1000);
let product4 = new Product("Cellphone", 500);
let product5 = new Product("Door", 200);
let product6 = new Product("Chair", 50);

let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
order1.addProduct(product3);
order1.addProduct(product4)
order1.addProduct(product5)
order1.addProduct(product6)
order1.showOrder();

let order2=new Order()
order2.addProduct(product6)
order2.showOrder()
