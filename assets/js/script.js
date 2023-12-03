/**
 * Wait for the dom to finish loading before running the game
 * Get the intro button elements and add event listeners to them
 * Set intro buttons to hide and display relevent sections
 */
document.addEventListener("DOMContentLoaded", function() {
    let introButtons = document.getElementsByClassName('intro-btn');

    for (let introbutton of introButtons) {
        introbutton.addEventListener('click', function () {
            if (introbutton.id === 'how-to-btn') {
                welcomeBox.classList.add('hide');
                howToBox.classList.remove('hide');
            } else {
                runGame();
            }
        });
    }
});

let welcomeBox = document.getElementsByClassName('welcome')[0];
let howToBox = document.getElementsByClassName('how-to')[0];
let questionBox = document.getElementsByClassName('question-box')[0];
let scoreBox = document.getElementsByClassName('score-area')[0];
let questionImage = document.getElementById('game-image');

let answerButtons = document.getElementsByClassName('answer-btn');

let shuffledQuestions, shuffledQuestionIndex;

/**
 * Main function to run the game
 */
function runGame() {
    // Code to show/hide relevent elements
    welcomeBox.classList.add('hide');
    questionBox.classList.remove('hide');
    scoreBox.classList.remove('hide');
    howToBox.classList.add('hide');
    // Code to shuffle questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    shuffledQuestionIndex = 0;
    nextQuestion();
}

/**
 * Function to set next question
 */
function nextQuestion() {
    showQuestion(shuffledQuestions[shuffledQuestionIndex]);
}

function showQuestion(question) {
    // Code to show question image
    questionImage.innerHTML = '';
    const imageElement = document.createElement('img');
    imageElement.src = question.imageSrc;
    questionImage.appendChild(imageElement);
    populateAnswerButtons(question);
}

/**
 * Function to add answers to answer button elements
 */
function populateAnswerButtons(question) {
    const answerButtons = document.getElementsByClassName('answer-btn');

    question.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.textContent = answer.text
        
        button.addEventListener('click', function() {
            checkAnswer.call(button, answer.correct);
        });
    });
}

function checkAnswer(correctAnswer, button) {
    if (correctAnswer) {
        console.log('Correct');
        this.classList.add('correct');
    } else {
        console.log('Incorrect');
        this.classList.add('incorrect');
    }
}

let questions = [
    {
        imageSrc: 'assets/images/animals/chameleon.webp',
        answers: [
            { text: 'Chameleon', correct: true },
            { text: 'Snake', correct: false },
            { text: 'Fish', correct: false },
            { text: 'Frog', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/giraffe.webp',
        answers: [
            { text: 'Lion', correct: false },
            { text: 'Llama', correct: false },
            { text: 'Giraffe', correct: true },
            { text: 'Camel', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/kangaroo.webp',
        answers: [
            { text: 'Dog', correct: false },
            { text: 'Monkey', correct: false },
            { text: 'Beaver', correct: false },
            { text: 'Kangaroo', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/animals/owl.webp',
        answers: [
            { text: 'Eagle', correct: false },
            { text: 'Owl', correct: true },
            { text: 'Lemur', correct: false },
            { text: 'Monkey', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/snake.webp',
        answers: [
            { text: 'Worm', correct: false },
            { text: 'Eel', correct: false },
            { text: 'Snake', correct: true },
            { text: 'Centipede', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/whale.webp',
        answers: [
            { text: 'Whale', correct: true },
            { text: 'Dolphin', correct: false },
            { text: 'Orca', correct: false },
            { text: 'Stingray', correct: false }
        ]
    },
    /*{
        imageSrc: 'assets/images/animals/.webp',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    }*/
]
