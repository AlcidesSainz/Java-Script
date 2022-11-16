/*In any object-oriented programming language, Overriding is a feature that allows a subclass or child class to 
provide a specific implementation of a method that is already provided by one of its super-classes or parent classes.*/
class Videogame {
  constructor(name, character) {
    this._name = name;
    this._character = character;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get character() {
    return this._character;
  }
  set character(character) {
    this._character = character;
  }

  fullDatas() {
    return this._character + " from " + this._name;
  }
}
class Company extends Videogame {
  constructor(name, character, companyName) {
    super(name, character);
    this._companyName = companyName;
  }
  get companyName() {
    return this._companyName;
  }
  set companyName(companyName) {
    this._companyName = companyName;
  }
  //Aplying overwrite
  fullDatas() {
    //super.fallDatas() to call the method of the father class
    return super.fullDatas() + " created by: " + this._companyName;
  }
}
let firstVideogame = new Videogame("God of War", "Kratos");
console.log(firstVideogame);

let firstCompany = new Company("God of War", "Kratos", "Santa Monica Studio");
console.log(firstCompany);

console.log(firstCompany.fullDatas());
