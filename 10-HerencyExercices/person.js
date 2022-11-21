class Person {
  static countPerson = 0;
  constructor(name, lastName, age) {
    this._idPerson = ++Person.countPerson;
    this._name = name;
    this._lastName = lastName;
    this._age = age;
  }
  getIdPerson() {
    return this._idPerson;
  }
  getName() {
    return this._name;
  }
  getLastName() {
    return this._lastName;
  }
  getAge() {
    return this._age;
  }
  setName(name) {
    this._name = name;
  }
  setLastName(lastName) {
    this._lastName = lastName;
  }
  setAge(age) {
    this._age = age;
  }
  toString() {
    return `${this._idPerson} ${this._name} ${this._lastName} ${this._age} years olds`;
  }
}
