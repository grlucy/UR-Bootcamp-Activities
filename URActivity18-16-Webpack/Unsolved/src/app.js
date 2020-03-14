const calculations = require("./calculations");

const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");
const expensesListEl = document.getElementById("expenses-list");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

const originalBal = balanceEl.innerText;

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  const total = calculations.subtract(
    Number(balanceEl.innerText),
    Number(priceEl.value)
  );
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
}

function reset(e) {
  e.preventDefault();
  balanceEl.innerText = originalBal;
  expensesListEl.innerHTML = "";
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;
