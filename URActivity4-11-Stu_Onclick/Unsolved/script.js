var decrementBtn = document.getElementById("decrement");
var incrementBtn = document.getElementById("increment");
var countDisplay = document.getElementById("count");
var countNum = 0;

function minusDecrement() {
  if (countNum === 0) {
    return;
  } else {
    countNum--;
    countDisplay.textContent = countNum;
  }
}

function plusIncrement() {
  countNum++;
  countDisplay.textContent = countNum;
}

decrementBtn.addEventListener("click", minusDecrement);
incrementBtn.addEventListener("click", plusIncrement);
