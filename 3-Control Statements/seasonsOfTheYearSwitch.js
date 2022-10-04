let month = 111;
let station = "Unknown station";

switch (month) {
  case 12:
  case 1:
  case 2:
  case 3:
    station = "Summer";
    break;
  case 4:
  case 5:
  case 6:
    station = "Fall";
    break;
  case 7:
  case 8:
  case 9:
    station = "Winter";
    break;
  case 10:
  case 11:
    station = "Spring";
    break;
  default:
    station = "Unknown station";
    break;
}
console.log(station);
