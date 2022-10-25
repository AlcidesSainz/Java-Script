let person = {
  _name: "Alcides",
  lastName: "Sainz",
  phone: 123456,
  favoriteVideogame: "The Legend of Zelda: Ocarine of Time",
  languaje: "en",

  //Get method
  get lang() {
    return this.languaje.toUpperCase();
  },
  //Set method
  set lang(lang) {
    this.languaje = lang.toUpperCase();
  },

  get fullName() {
    return this._name + " " + this.lastName;
  },
};

console.log(person.fullName);
console.log(person.lang);
//Changing the languaje
person.lang = "es";
console.log(person.lang);
console.log(person.languaje);
