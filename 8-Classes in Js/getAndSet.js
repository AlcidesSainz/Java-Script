class Character {
  constructor(_name, videoGame) {
    this.Cname = _name;
    this.CvideoGame = videoGame;
  }
  get _name() {
    return this.Cname;
  }
  set _name(_name) {
    return this.Cname=_name;
  }
  get videoGame() {
    return this.CvideoGame;
  }
  set videoGame(videoGame) {
    this.CvideoGame=videoGame;
  }
}
let character1 = new Character("Arthur Morgan", "Red Dead Redemption 2");
//Get Method
console.log(character1._name);
console.log(character1.CvideoGame);

//Set Method
character1._name = "Kratos";
character1.videoGame = "God of War";

//Get Method
console.log(character1._name);
console.log(character1.CvideoGame)
