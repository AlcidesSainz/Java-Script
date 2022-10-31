//Function to create a constructor
function Person(_name, lastName, email) {
  this._name = _name;
  this.lastName = lastName;
  this.email = email;

  //Adding a method in a constructor
  this.FullName = function () {
    return this._name + " " + this.lastName;
  };
}
let father = new Person("Jhon", "Snow", "jhonSnow@gmail.com");
console.log(father);
//Calling the method
console.log(father.FullName());

let mother = new Person("Daenerys", "Targaryen", "dany@gmail.com");
console.log(mother);
console.log(mother.FullName())

let son = new Person("Tyrion", "Lannister", "tyrion@gmail.com");
console.log(son);
console.log(son.FullName())
