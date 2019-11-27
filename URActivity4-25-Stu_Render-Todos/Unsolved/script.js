var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var todoButton = document.getElementById("todo-button");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoButton.addEventListener("click", function(event) {
  var todoInput = document.getElementById("todo-text");
  todos.push(todoInput.value);
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
});

todoForm.addEventListener("submit", function(event) {
  event.preventDefault(); // This has to be on the form, not the text box input!!
  var todoInput = document.getElementById("todo-text");
  todos.push(todoInput.value);
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
});
