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
console.log(typeof flag)

//Function data
function myFirstFunction(){}
console.log(typeof myFirstFunction)