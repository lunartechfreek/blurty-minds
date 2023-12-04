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
let nextButton = document.getElementById('next-btn');
let gameEndBox = document.getElementsByClassName('game-end')[0];
let restartButton = document.getElementById('restart-btn');


let shuffledQuestions, shuffledQuestionIndex;

//Code to make the next button call the reset function
nextButton.addEventListener('click', reset);

restartButton.addEventListener('click', runGame);

/**
 * Main function to run the game
 */
function runGame() {
    // Code to show/hide relevent elements
    welcomeBox.classList.add('hide');
    questionBox.classList.remove('hide');
    scoreBox.classList.remove('hide');
    howToBox.classList.add('hide');
    gameEndBox.classList.add('hide');
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
    startCountdown();
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
 * Function to add answers to answer button elements,
 * remove event listeners from button elements to reset,
 * and to add correct dataset
 */
function populateAnswerButtons(question) {
    const answerButtons = document.getElementsByClassName('answer-btn');

    //Remove event listeners
    for (const button of answerButtons) {
        button.removeEventListener('click', checkAnswerClick);
    }

    //Displays answers on buttons
    question.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.textContent = answer.text
        
        //Add dataset attribute
        button.dataset.correct = answer.correct;

        //Adds event listener to all buttons
        button.addEventListener('click', checkAnswerClick);
    });
}

/**
 * Function to check the answer clicked on 
 */
function checkAnswerClick() {
    const correctAnswer = this.dataset.correct === 'true';
    checkAnswer(correctAnswer, this);
}

/**
 * Function to check if the answer is correct
 * and to handle what to do with the answer
 */
function checkAnswer(correctAnswer, button) {
    resetButtons();
    if (correctAnswer) {
        console.log('Correct');
        button.classList.add('correct');
        //Code to show next button
        nextButton.classList.remove('hide');
    } else {
        console.log('Incorrect');
        button.classList.add('incorrect');
        return;
    }
}

/**
 * Function to reset the button colours
 */
function resetButtons() {
    const answerButtons = document.getElementsByClassName('answer-btn');

    //Loop to remove button classes
    for (const button of answerButtons) {
        button.classList.remove('correct', 'incorrect');
    }
}

/**
 * Function to reset everything for next question
 */
function reset() {
    resetButtons();
    nextButton.classList.add('hide');
    //Code to clear question
    questionImage.innerHTML = '';
    //Code to get next question
    shuffledQuestionIndex++;

    if (shuffledQuestionIndex < 10) {
        nextQuestion();
    } else {
        gameEndBox.classList.remove('hide');
        questionBox.classList.add('hide');
        scoreBox.classList.add('hide');
        console.log('Game Over');
    }
}

let timerInterval;
/**
 * Function for countdown timer
 */
function startCountdown() {
    let seconds = 10;

    const timer = document.getElementById('timer');

    function updateTimer() {
        //Add countdown text to element
        timer.innerHTML = `${seconds} seconds remaining`;

        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(timerInterval);
            timer.innerHTML = "Time's up!";
        }
    }

    //Clears existing imer to stop overlapping
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    //Increments updateTimer code to run every one second
    timerInterval = setInterval(updateTimer, 1000);
}

// Game Questions 
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
    {
        imageSrc: 'assets/images/animals/koala.webp',
        answers: [
            { text: 'Lemur', correct: false },
            { text: 'Monkey', correct: false },
            { text: 'Koala', correct: true },
            { text: 'Cat', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/monkey.webp',
        answers: [
            { text: 'Monkey', correct: true },
            { text: 'Bear', correct: false },
            { text: 'Dog', correct: false },
            { text: 'Gorilla', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/penguin.webp',
        answers: [
            { text: 'Seal', correct: false },
            { text: 'Eagle', correct: false },
            { text: 'Skunk', correct: false },
            { text: 'Penguin', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/animals/rhino.webp',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Hippo', correct: false },
            { text: 'Rhino', correct: true },
            { text: 'Lion', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/tiger.webp',
        answers: [
            { text: 'Cat', correct: false },
            { text: 'Tiger', correct: true },
            { text: 'Dog', correct: false },
            { text: 'Fox', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/turtle.webp',
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Whale', correct: false },
            { text: 'Penguin', correct: false },
            { text: 'Turtle', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/animals/alligator.webp',
        answers: [
            { text: 'Alligator', correct: true },
            { text: 'Turtle', correct: false },
            { text: 'Lizard', correct: false },
            { text: 'Snake', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/bear.webp',
        answers: [
            { text: 'Dog', correct: false },
            { text: 'Bear', correct: true },
            { text: 'Jaguar', correct: false },
            { text: 'Gorilla', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/dog.webp',
        answers: [
            { text: 'Panda', correct: false },
            { text: 'Cat', correct: false },
            { text: 'Wolf', correct: false },
            { text: 'Dog', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/animals/frog.webp',
        answers: [
            { text: 'Snake', correct: false },
            { text: 'Lizard', correct: false },
            { text: 'Frog', correct: true },
            { text: 'Turtle', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/lion.webp',
        answers: [
            { text: 'Camel', correct: false },
            { text: 'Lion', correct: true },
            { text: 'Cheetah', correct: false },
            { text: 'Buffalo', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/tarantula.webp',
        answers: [
            { text: 'Tarantula', correct: true },
            { text: 'Beetle', correct: false },
            { text: 'Ant', correct: false },
            { text: 'Grasshoper', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/cat.webp',
        answers: [
            { text: 'Koala', correct: false },
            { text: 'Lemur', correct: false },
            { text: 'Cat', correct: true },
            { text: 'Monkey', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/eagle.webp',
        answers: [
            { text: 'Raven', correct: false },
            { text: 'Parrot', correct: false },
            { text: 'Owl', correct: false },
            { text: 'Eagle', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/animals/elephant.webp',
        answers: [
            { text: 'Elephant', correct: true },
            { text: 'Rhino', correct: false },
            { text: 'Hippo', correct: false },
            { text: 'Bear', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/panda.webp',
        answers: [
            { text: 'Dog', correct: false },
            { text: 'Cat', correct: false },
            { text: 'Panda', correct: true },
            { text: 'Skunk', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/polar-bear.webp',
        answers: [
            { text: 'Seal', correct: false },
            { text: 'Polar Bear', correct: true },
            { text: 'Dog', correct: false },
            { text: 'Wolf', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/shark.webp',
        answers: [
            { text: 'Shark', correct: true },
            { text: 'Swordfish', correct: false },
            { text: 'Turtle', correct: false },
            { text: 'Dolphin', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/animals/butterfly.webp',
        answers: [
            { text: 'Beetle', correct: false },
            { text: 'Tarantula', correct: false },
            { text: 'Fly', correct: false },
            { text: 'Butterfly', correct: true }
        ]
    }
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
