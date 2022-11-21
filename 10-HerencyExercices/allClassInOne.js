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
class Employee extends Person {
  static countEmployee = 0;
  constructor(name, lastName, age, salary) {
    super(name, lastName, age);
    this._idEmployee = ++Employee.countEmployee;
    this._salary = salary;
  }
  getIdEmployee() {
    return this._idEmployee;
  }
  getSalary() {
    return this._salary;
  }
  setSalary(salary) {
    this._salary = salary;
  }
  toString() {
    return `${super.toString()} ${this._idEmployee} ${this._salary}`;
  }
}
class Client extends Person {
  static countClient = 0;
  constructor(name, lastName, age, registrationDate) {
    super(name, lastName, age);
    this._idClient = ++Client.countClient;
    this._registrationDate = registrationDate;
  }
  getIdClient() {
    return this._idClient;
  }
  getRegistrationDate() {
    return this._registrationDate;
  }
  setIdClient(idClient) {
    this._idClient = idClient;
  }
  setRegistrationDate(registrationDate) {
    this._registrationDate = registrationDate;
  }
  toString() {
    return (
      super.toString() + " " + this._idClient + " " + this._registrationDate
    );
  }
}

let person1 = new Person("Jhon", "Snow", 22);
let employee1 = new Employee("Juan", "Nieve", 22, "$1000");
let client1 = new Client("Juana", "Nieve", 22, "22/11/2012");
//Person Object
console.log(person1);
console.log(person1.toString());
let person2 = new Person("Lucy", "Sainz", 3);
console.log(person2.toString());
//Employee Object
console.log(employee1);
console.log(employee1.toString());
//Client Object
console.log(client1);
console.log(client1.toString());
