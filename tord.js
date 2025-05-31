const cars = [1, 2, 3, 4, 5];
let answer = ["T", "o", "r", "y", "n"];
let trys = 0;
let wron = 0;

function sub() {
  trys += 1;
  document.getElementById("t").innerHTML = "Trys: " + trys;

  for (let x = 0; x < 5; x++) {
    const carEl = document.getElementById(cars[x]);
    const ans = answer[x];

    if (
      carEl &&
      carEl.innerHTML === ans &&
      ans !== "solved"
    ) {
      wron += 1;
      answer[x] = "solved";
      carEl.id = "d";
      cars[x] = "d";
    }
  }

  if (trys < 4 && wron === 5) {
    document.getElementById("t").innerHTML = "You win";
  }
}

