let myNumber = "10";
console.log(typeof myNumber);

let age = Number(myNumber);
console.log(typeof age);
//Conditional IF Method
if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("To young to vote");
}

//Ternary Method
vote = age >= 18 ? "Can vote" : "To young to vote";
console.log(vote);
