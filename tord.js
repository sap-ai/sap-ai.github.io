const cars = [1, 2, 3, 4, 5];
const answer = ["T", "o", "r", "y", "n"];
let trys = 0;
let wron = 0;
function sub() {
  trys = trys + 1;
  document.getElementById("t").innerHTML = "Trys: " + trys;
  for (let x of 5) {
    if (document.getElementById(cars[x]).innerHTML == answer[x] & document.getElementById(answer[x]).innerHTML != "solved'") {
      wron = wron + 1;
      answer[x] = "solved'";
      document.getElementById(cars[x]).id = "d";
      cars[x] = "d";
    }
    if (trys < 4 & wron == 5){
      document.getElementById("t").innerHTML = "you win";
    }
  }
}
