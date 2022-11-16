//Declaring a type object in JS
let person = {
  //Parameters
  _name: "Jhon",
  lastName: "Doe",
  age: 20,
  email: "jhondoe@gmail.com",
  //Methods
  completeName: function () {
    return this._name + " " + this.lastName;
  },
};
//Creating a object another syntax
let person2 = new Object();
person2._name = "Alcides";
person2.country = "Ecuador";
person2.age = 23;
person2.phoneNumber = 1234566;
console.log(person2.phoneNumber);

//Printing parameters of the object
console.log(person);
console.log(person._name);
console.log(person.lastName);
console.log(person.age);
console.log(person.email);
//Calling the method
console.log(person.completeName());

//Access object propierties
console.log(person._name);
//Another Way
console.log(person["_name"]);
//Using for in loop to access
for (properties in person) {
  console.log(properties);
  console.log(person[properties]);
}

//Add and delete properties of a object
let person3 = {
  _name: "Gabriela",
  lastName: "Sanchez",
  email: "gabrielasanchez@gmail.com",
  age: 20,
  fullName: function () {
    return this._name + " " + this.lastName;
  },
};
console.log(person3.fullName());
//Adding properties
person3.tel = 1234556;
person3.tel = 9876543;
console.log(person3);2
//Deleting properties
delete person3.tel;
console.log(person3);
