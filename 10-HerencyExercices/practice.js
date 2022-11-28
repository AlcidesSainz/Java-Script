class TvShow {
  static counter = 1;
  constructor(name, premiereYear, seasons) {
    this._id = TvShow.counter++;
    this._name = name;
    this._premiereYear = premiereYear;
    this._seasons = seasons;
  }
  getId() {
    return this._id;
  }
  getName() {
    return this._name;
  }
  getPremiere() {
    return this._premiereYear;
  }
  getSeasons() {
    return this._seasons;
  }
  setName(name) {
    this._name = name;
  }
  setPremiere(premiereYear) {
    this._premiereYear = premiereYear;
  }
  setSeasons(seasons) {
    this._seasons = seasons;
  }
  toString() {
    return `${
      this._id +
      "-" +
      this._name +
      " " +
      this._premiereYear +
      " and " +
      this._seasons
    } seasons`;
  }
}
class Platform extends TvShow {
  constructor(name, premiereYear, seasons, platformName, suscription) {
    super(name, premiereYear, seasons);
    this._platformName = platformName;
    this._suscription = suscription;
  }
  getPlatformName() {
    return this._platformName;
  }
  getSuscription() {
    return this._suscription;
  }
  setPlatformName(platformName) {
    this._platformName = platformName;
  }
  setSuscription(suscription) {
    this._suscription = suscription;
  }
  toString() {
    return (
      super.toString() +
      " you can see it in: " +
      this._platformName +
      " with a price of : " +
      this._suscription +
      " monthly"
    );
  }
}
let tv1 = new Platform("Game of Thrones", 2011, 8, "HBO", "$15");
let tv2 = new Platform("Dark", 2018, 3, "Netflix", "$15");
let tv3 = new Platform("Shingeki no Kyogin", 2013, 8, "CrunchyRoll", "$11");
let tv4 = new TvShow("The Boys", 2019, 3);

console.log(tv1.toString());
console.log(tv2.toString());
console.log(tv3.toString());
console.log(tv4.toString());
