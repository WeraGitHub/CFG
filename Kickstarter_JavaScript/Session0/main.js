main.js
let min = 10000;
let max = 90000;
let num = Math.floor(Math.random() * min) + max;

document.getElementById('ticketNum').innerText = num;

function maybeAlert() {
    alert('Amazing! :D');
}

function definetelyPopUp() {
    alert('See you then!');
}

function signUpPrompt() {
    let name = prompt('Great! Please provide your name: ');
    prompt('Please provide your email: '); // this does nothing. once the user hits enter, their input is gone

    document.getElementById('userMsg').innerText = `See you then, ${name}!`
}




     