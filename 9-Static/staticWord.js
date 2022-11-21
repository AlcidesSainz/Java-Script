class Person {
  //Creating a static param
  static counterPersonObjects = 0;

  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
    Person.counterPersonObjects++;
  }
  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
  set name(name) {
    this._name = name;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  fullName() {
    return this.name + " " + this.lastName;
  }
  static greetings() {
    return "Hi from static function";
  }
  static testingStatic(person) {
    return person.name;
  }
}
class Career extends Person {
  constructor(name, lastName, universityCareer) {
    super(name, lastName);
    this._universityCareer = universityCareer;
  }
  get universityCareer() {
    return this._universityCareer;
  }
  set universityCareer(universityCareer) {
    this._universityCareer = universityCareer;
  }
  fullName() {
    return (
      this._name +
      " " +
      this._lastName +
      " is studying " +
      this._universityCareer
    );
  }
}
let person = new Person("Gabita", "Bonita");
let person1 = new Person("Alcides", "Sainz");
let career = new Career("Gabriela", "Hernandez", "Architecture");
let career1 = new Career("Alcides", "Sainz", "Software Development");
let person2 = new Person("Lucy", "Sainz");
console.log(person);

console.log(person.fullName());
console.log(career.fullName());
console.log(career1.fullName());
//console.log(person.greetings()) Is not posible to call a static function from a object, we have to call from the class
//Ways to call a static function
console.log(Person.greetings());
console.log(Person.testingStatic(person));
console.log(Person.testingStatic(career));
console.log(Person.testingStatic(career1));
//Or
Person.testingStatic(person);

//Calling a static variable
console.log(person.counterPersonObjects); //This is not the way to call statics variables
//This is the correct way
console.log(Person.counterPersonObjects);
//Calling the static variable from the child class
console.log(Career.counterPersonObjects);
