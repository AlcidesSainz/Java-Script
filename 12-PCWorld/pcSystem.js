class DeviceEntry {
  constructor(typeEntry, brand) {
    this._typeEntry = typeEntry;
    this._brand = brand;
  }
  getTypeEntry() {
    return this._typeEntry;
  }
  getBrand() {
    return this._brand;
  }
  setTypeEntry(typeEntry) {
    this._typeEntry = typeEntry;
  }
  setBrand(brand) {
    this._brand = brand;
  }
  toString() {
    return `Entry: ${this._typeEntry} \n Brand: ${this._brand}`;
  }
}
class Mouse extends DeviceEntry {
  static mouseCounter = 0;
  constructor(typeEntry, brand) {
    super(typeEntry, brand);
    this._idRaton = ++Mouse.mouseCounter;
  }
  toString() {
    return `Mouse ID: ${this._idRaton} \n ${super.toString()}`;
  }
}
class Keyboard extends DeviceEntry{
    static keyboardCounter=0
    constructor(typeEntry,brand){
        super(typeEntry,brand)
        this._idKeyboard = ++Keyboard.keyboardCounter
    }
    toString(){
        return `Keyboard ID: ${this._idKeyboard} \n ${super.toString()}`
    }
}
class Display{
    static displayCounter=0
    constructor(brand,size){
        this._idDisplay = ++Display.displayCounter
        this._brand=brand
        this._size=size
    }
    getIdDisplay(){
        return this._idDisplay
    }
    getBrand(){
        return this._brand
    }
    getSize(){
        this._size
    }
    setBrand(brand){
        this._brand=brand
    }
    setSize(size){
        this._size=size
    }
    toString(){
        return `Display ID: ${this._idDisplay} \n Brand: ${this._brand} \n Size: ${this._size}''`
    }
}
let device1 = new DeviceEntry("USB3", "Genius");
let mouse1 = new Mouse("USB3", "Genius");
let mouse2 = new Mouse("USB", "Logitech");
let keyboard1 = new Keyboard("USB", "Logitech")
let keyboard2 = new Keyboard("USB", "Casio")
let display1 = new Display('LG', 15)
console.log(mouse1.toString());
console.log(mouse2.toString());
console.log(keyboard1.toString())
console.log(keyboard2.toString())
console.log(display1.toString())
