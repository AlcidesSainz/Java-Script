/*
    Example of 
    data types 
    in JavaScript
*/
//String
var _name = "Alcides";
console.log(_name);
console.log(typeof _name);


//Changing the data type of var name
_name = 10;
//typeof is used to know the data type of a variable
console.log(typeof _name);

//Numeric
var num = 1000;
console.log(num);

//Object
var object = {
  name: "Alcides",
  last_name: "Sainz",
  phone: 5565647,
};
console.log(typeof object)
console.log(object);
console.log(object.name);
console.log(object.last_name);
console.log(object.phone);

//Boolean data(true||false)
//Defining a boolean var
var flagTrue = true;
var flagFalse = false
console.log(flagTrue)
console.log(flagFalse)
console.log(typeof flagTrue)

//Function data
function myFirstFunction(){}
console.log(typeof myFirstFunction);

//Symbol data
var _symbol = Symbol("my symbol");
console.log(_symbol)
console.log(typeof _symbol)

//Class == Function
class Person{
  constructor(name,last_name){
    this.name=name;
    this.last_name=last_name;
  }
}
console.log(Person);
console.log(typeof Person);

//Type undefined
var x;
console.log(x)

//Type NUll
var y =null;
console.log(y)
console.log(typeof y)

//Arrays
var cars =['BMW','Chevrolet', 'Audi'];
console.log(cars);
console.log(cars[1]);
console.log(typeof cars);

//Empty String
var z =' ';
console.log(z);
console.log(typeof z);
