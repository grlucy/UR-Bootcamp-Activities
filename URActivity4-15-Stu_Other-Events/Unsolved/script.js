var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  } else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

// the event's code, key, and status (keydown or keyup) should be displayed in the `#key-events` div when the user presses a key anywhere on the document
document.addEventListener("keydown", function(event) {
  document.getElementById("key").textContent = event.key;
  document.getElementById("code").textContent = event.keyCode;
  document.getElementById("status").textContent = "Keydown";
});
document.addEventListener("keyup", function(event) {
  document.getElementById("status").textContent = "Keyup";
});
// the text content of the event's target, and the cursor's x and y coordinates should be displayed in the `#click-events` div when the user clicks the anywhere on document
document.addEventListener("click", function(event) {
  document.getElementById("target").textContent = event.target.textContent;
  document.getElementById("x").textContent = event.clientX;
  document.getElementById("y").textContent = event.clientY;
});

eventType.addEventListener("change", toggleDisplay);
