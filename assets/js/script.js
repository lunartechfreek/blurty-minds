// Wait for the dom to finish loading before running the game
//Get the intro button elements and add event listeners to them
//Set intro buttons to hide and display relevent sections
document.addEventListener("DOMContentLoaded", function() {
    let introButtons = document.getElementsByClassName('intro-btn');
    let welcomeBox = document.getElementsByClassName('welcome')[0];
    let howToBox = document.getElementsByClassName('how-to')[0];
    let questionBox = document.getElementsByClassName('question-box')[0];
    let scoreBox = document.getElementsByClassName('score-area')[0];

    for (let introbutton of introButtons) {
        introbutton.addEventListener('click', function () {
            if (introbutton.id === 'how-to-btn') {
                welcomeBox.classList.add('hide');
                howToBox.classList.remove('hide');
            } else {
                welcomeBox.classList.add('hide');
                questionBox.classList.remove('hide');
                scoreBox.classList.remove('hide');
            }
        });
    }
});



function runGame() {

}

function nextQuestion() {

}

