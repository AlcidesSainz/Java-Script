//The prototyope propertie is used to asign the same value for everyone in a parameter

function Character(_name, videogame) {
  this._name = _name;
  this.videogame = videogame;
  this.fullDatas = function () {
    return _name + " from " + videogame;
  };
}
Character.prototype.age = "Unknown";

let firstCharacter = new Character("Link", "The Legend of Zelda");
console.log(firstCharacter.fullDatas());
console.log(firstCharacter.age);

let secondCharacter = new Character("Kratos", "God of War");
console.log(secondCharacter.fullDatas());
console.log(secondCharacter.age);

let thirdCharacter = new Character("Henry", "Kingdom Come");
console.log(thirdCharacter.fullDatas())
//But the prototype can be modified
thirdCharacter.age = 19
console.log(thirdCharacter.age)
