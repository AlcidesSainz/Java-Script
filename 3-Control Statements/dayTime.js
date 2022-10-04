let time = 0;
let messsage;

if (time > 6 && time <= 11) {
  messsage = "Good Morning";
} else if (time >= 12 && time <= 18) {
  messsage = "Good Afternoon";
} else if (time >= 19 && time <= 24) {
  messsage = "Good Night";
} else if (time >= 0 && time <= 6) {
  messsage = "Sleeping";
} else {
  messsage = "Wrong Value";
}
console.log(messsage);
