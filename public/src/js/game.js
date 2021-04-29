'use strict';

const min = document.querySelector('#min');

const max = document.querySelector('#max');

const number = document.querySelector('#number');

const message = document.querySelector('#message');

const score = document.querySelector('#score');

const highscore = document.querySelector('#highscore');

const inputNumber = document.querySelector('#inputNumber');

const btnCheck = document.querySelector('#btnCheck');

const btnAgain = document.querySelector('#btnAgain');

let randomNumber;


btnAgain.addEventListener('click', again);


btnCheck.addEventListener('click', check);

function check() {

    let guessNumber = inputNumber.value;

    if (guessNumber < randomNumber) {

        message.textContent = "Muito baixo";

    } else if (guessNumber > randomNumber) {

        message.textContent = "Muito alto";

    } else {

        message.textContent = "Correcto";

        document.body.style.backgroundColor = "#13be46";

        number.textContent = randomNumber;

    }

}

function again() {
    min.textContent = 1;

    max.textContent = 20;

    number.textContent = "?";

    message.textContent = "Start guessing...";

    score.textContent = "0";

    highscore.textContent = "0";

    inputNumber.value = 0;

    randomNumber = Math.floor(Math.random() * 20) + 1;

}
