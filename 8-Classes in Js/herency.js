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
  fullDatas(){
    return this._character+' from '+this._name
  }
}
class Company extends Videogame {
  constructor(name, character, companyName) {
    super(name, character); //To call the param of the father class
    this._companyName = companyName;
  }
  get companyName() {
    return this._companyName;
  }
  set companyName(companyName) {
    this._companyName = companyName;
  }
}
let firstVideogame = new Videogame("God of War", "Kratos");
console.log(firstVideogame);

let firstCompany = new Company("God of War", "Kratos", "Santa Monica Studio");
console.log(firstCompany);
//Calling a method from the father's class
console.log(firstCompany.fullDatas())