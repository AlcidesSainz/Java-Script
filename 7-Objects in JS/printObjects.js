//Diferents ways to print a object
let person = {
  _name: "Alcides",
  lastName: "Sainz",
  phone: 123456,
  favoriteVideogame: "The Legend of Zelda: Ocarine of Time",
};
//First Way (Concatenation)
console.log(
  person._name +
    " " +
    person.lastName +
    "," +
    person.phone +
    "," +
    person.favoriteVideogame
);
//Second Way(Iteration)
for (properties in person) {
  console.log(person[properties]);
}

//Third Way(Object.values)
let personArray = Object.values(person);
console.log(personArray);

//Four Way(JSON.stringify)
let personString = JSON.stringify(person)
console.log(personString)
