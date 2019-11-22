var countHeading = document.querySelector(".countHeading");
var countPic = document.querySelector(".countPic");
var numCountdown = 5;

countHeading.innerText = numCountdown;

function startCountdown() {
  var countdownInterval = setInterval(function() {
    numCountdown--;
    countHeading.innerText = numCountdown;
    if (numCountdown === 3) {
      clearInterval(countdownInterval);
      countHeading.style.display = "none";
      startPictureShow();
    }
  }, 500);
}

function startPictureShow() {
  var i = 0;
  var pictureInterval = setInterval(function() {
    var picArray = [
      "./images/3.jpg",
      "./images/2.jpg",
      "./images/1.jpg",
      "./images/firework.jpg"
    ];
    countPic.innerHTML = "";
    countPic.innerHTML = `<img src="${picArray[i]}" style="width:100%;height:100%;">`;
    i++;
    if (i === picArray.length) {
      clearInterval(pictureInterval);
    }
  }, 700);
}

startCountdown();
