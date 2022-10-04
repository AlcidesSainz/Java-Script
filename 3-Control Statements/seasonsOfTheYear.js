let month = 1;
let station;

if (month == 12 || month == 1 || month == 2 || month == 3) {
  station = "Summer";
} else if (month == 4 || month == 5 || month == 6) {
  station = "Fall";
} else if (month == 7 || month == 8 || month == 9) {
  station = "Winter";
} else if (month == 10 || month == 11) {
  station = "Spring";
} else {
  station = "Wrong Value";
}

console.log(station);
