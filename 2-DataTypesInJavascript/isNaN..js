let myNumber = "18x";

let age = Number(myNumber);
console.log(typeof age);
console.log(age); //NaN(Not a Number)

ageTernary = isNaN(age) ? "Is not a number" : "Is a number";
console.log(ageTernary);

if (isNaN(age)) {
  console.log("Is not a number");
} else {
  console.log("Is a number");
}
