var poem = "Some say the world will end in 🔥, Some say in ice.";
var words = poem.split(" ");
var timeEl = document.getElementById("time");
var wordsEl = document.getElementById("words");
var countdown = 5;
var headingOnes = document.getElementsByTagName("H1");

// headingOnes.setAttribute(
//   "style",
//   "text-align:center;margin-top:100px;font-size:100px;"
// );

function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function() {
    countdown--;
    timeEl.textContent = countdown;
    if (countdown === 0) {
      clearInterval(timerInterval);
      timeEl.setAttribute("style", "display:none;");
      speedRead();
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  var i = 0;
  var readerInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(readerInterval);
    } else {
      wordsEl.textContent = words[i];
      i++;
    }
  }, 200);
}

timeEl.textContent = countdown;
prepareRead();
