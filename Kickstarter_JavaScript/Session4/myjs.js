document.write("I am coming from JS file");

const element1 = document.getElementById("Mohana");

let injection = "Hellooooo";

for (let i = 0; i < 50; i++) {
  injection += "😈❤️👌";
}

element1.textContent = injection;

function convertAmount() {
  const amount = document.getElementById("amount").value;
  const newAmount = amount * 5;
  document.getElementById("newAmount").textContent = newAmount;
}
