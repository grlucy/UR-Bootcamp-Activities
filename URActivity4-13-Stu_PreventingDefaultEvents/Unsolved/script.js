var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var mealPrice = document.getElementById("mealPrice");
  console.log(mealPrice.value);
  var confirmFifteen = document.getElementById("confirmFifteen").checked;
  var confirmTwenty = document.getElementById("confirmTwenty").checked;
  var confirmOther = document.getElementById("confirmOther").checked;
  if (
    (confirmFifteen && confirmTwenty) ||
    (confirmFifteen && confirmOther) ||
    (confirmTwenty && confirmOther) ||
    (confirmFifteen && confirmTwenty && confirmOther)
  ) {
    alert("Please only check one tip amount.");
  } else if (
    confirmFifteen == false &&
    confirmTwenty == false &&
    confirmOther == false
  ) {
    alert("Please add a tip amount.");
  } else if (confirmFifteen) {
    var totalTip = (Number(mealPrice.value) * 0.15).toFixed(2);
    document.getElementById("tip-amount").textContent = `$${totalTip}`;
    var totalPrice = Number(mealPrice.value) + totalTip;
    document.getElementById("new-total").textContent = `$${totalPrice}`;
  } else if (confirmTwenty) {
    var totalTip = (Number(mealPrice.value) * 0.2).toFixed(2);
    document.getElementById("tip-amount").textContent = `$${totalTip}`;
    var totalPrice = Number(mealPrice.value) + totalTip;
    document.getElementById("new-total").textContent = `$${totalPrice}`;
  } else {
    var otherTipInput = document.getElementById("otherTip").value;
    var otherTipAmount = Number(otherTipInput);
    var totalTip = (Number(mealPrice.value) * (otherTipAmount / 100)).toFixed(
      2
    );
    document.getElementById("tip-amount").textContent = `$${totalTip}`;
    var totalPrice = Number(mealPrice.value) + totalTip;
    document.getElementById("new-total").textContent = `$${totalPrice}`;
  }
});
