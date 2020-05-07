let num = 0;
let polarity = 0;
let result = "";

function generateNumber() {
  //console.log(num);
  num = Math.floor(Math.random() * 100);
  polarity = Math.ceil(Math.random() * 2);
  if (polarity % 2 == 1) {
    num *= -1;
  }
  oOrE2(num);
}

function oOrE2(num) {
  if (Number.isInteger(num / 2)) {
    document.getElementById("result").classList.remove("text-danger");
    document.getElementById("result").classList.add("text-info");
    result = "EVEN";
  } else {
    document.getElementById("result").classList.remove("text-info");
    document.getElementById("result").classList.add("text-danger");
    result = "ODD";
  }
  document.getElementById(
    "number"
  ).innerHTML = `<H4>This click resulted in:</H4> <H2>${num}</H2>`;
  document.getElementById("result").innerText = `${num} is ${result}.`;
}
