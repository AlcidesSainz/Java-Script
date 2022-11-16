let person1 = {
  _name: "ALcides",
  lastName: "Sainz",
  fullName: function (title, phoneNumber) {
    return title + ":" + this._name + " " + this.lastName + "," + phoneNumber;
  },
};
let person2 = {
  _name: "Manolo",
  lastName: "Polo",
};

console.log(person1.fullName("Lic", "098776"));
//To add parameters using apply methods we have to use a array to add that paramethers
let arrayApply = ["Ing", "099876543"];
console.log(person1.fullName.apply(person2, arrayApply));
