const scoreOne = document.querySelector('.score-one');
const scoreTwo = document.querySelector('.score-two');
const addOne = document.querySelector('.button-one');
const addTwo = document.querySelector('.button-two');
const reset = document.querySelector('.button-reset');
const maxScoreElement = document.querySelector('#max-score');
let scoreOneValue = 0;
let scoreTwoValue = 0;

function checkScore() {
    if (parseInt(scoreOneValue) === parseInt(maxScoreElement.value) || parseInt(scoreTwoValue) === parseInt(maxScoreElement.value)) {
        if (scoreOneValue > scoreTwoValue) {
            scoreOne.style.color = 'green';
            scoreTwo.style.color = 'red';
        }
        else {
            scoreOne.style.color = 'red';
            scoreTwo.style.color = 'green';
        }
        addOne.disabled = true;
        addTwo.disabled = true;
    }
}

addOne.addEventListener('click', () => {
    scoreOneValue += 1;
    scoreOne.innerText = scoreOneValue;
    checkScore();
})

addTwo.addEventListener('click', () => {
    scoreTwoValue += 1;
    scoreTwo.innerText = scoreTwoValue;
    checkScore();
})

reset.addEventListener('click', () => {
    scoreOneValue = 0;
    scoreTwoValue = 0;
    scoreOne.innerText = 0;
    scoreTwo.innerText = 0;
    scoreOne.style.color = 'black';
    scoreTwo.style.color = 'black';
    addOne.disabled = false;
    addTwo.disabled = false;
})
