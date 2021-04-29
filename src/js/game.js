'use strict';

const min = document.querySelector('#min');

const max = document.querySelector('#max');

const number = document.querySelector('#number');

const message = document.querySelector('#message');

const scoreText = document.querySelector('#score');

const highscoreText = document.querySelector('#highscore');

const inputNumber = document.querySelector('#inputNumber');

const btnCheck = document.querySelector('#btnCheck');

const btnAgain = document.querySelector('#btnAgain');

let randomNumber;

let score;

let highscore = 0;

randomNumber = Math.floor(Math.random() * 20) + 1;


again();

btnAgain.addEventListener('click', again);


btnCheck.addEventListener('click', check);

function check() {

    let guessNumber = inputNumber.value;


    if (guessNumber < randomNumber) {

        message.textContent = "Muito baixo";

        score--;

    } else if (guessNumber > randomNumber) {

        message.textContent = "Muito alto";

        score--;

    } else if (guessNumber == randomNumber) {

        message.textContent = "Correcto";

        document.body.style.backgroundColor = "#13be46";


        number.textContent = randomNumber;

        if (score > highscore) {
            highscore = score;
        }

        highscoreText.textContent = highscore;

    }


    scoreText.textContent = score;

}

function again() {

    min.textContent = 1;

    max.textContent = 20;

    number.textContent = "?";

    message.textContent = "Comece Adivinhando...";

    score = scoreText.textContent = 20;

    inputNumber.value = 0;

    randomNumber = Math.floor(Math.random() * 20) + 1;

    document.body.style.backgroundColor = "#2e2e2e";

}
