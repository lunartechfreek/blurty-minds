/* jshint esversion: 11 */

//Global variables
let welcomeBox = document.getElementsByClassName('welcome')[0];
let howToBox = document.getElementsByClassName('how-to')[0];
let questionBox = document.getElementsByClassName('question-box')[0];
let gameType = document.getElementById('game-type');
let scoreBox = document.getElementsByClassName('score-area')[0];
let scoreSpan = document.getElementById('score');
let finalScoreSpan = document.getElementById('final-score');
let imgBlur = document.getElementById('img-blur');
let answerButtons = document.querySelectorAll('.answer-btn');
let nextButton = document.getElementById('next-btn');
let gameEndBox = document.getElementsByClassName('game-end')[0];
let homeButton = document.getElementById('home-btn');
let seconds = 10;
let score = 0;
let border = document.getElementById('image-border');
let timer = document.getElementById('timer');

let shuffledQuestions, shuffledQuestionIndex;

let replayBtn = document.getElementById('replay');

let controlButtons = document.querySelectorAll('.ctrl-btn');

let animalQuestions;
let landmarkQuestions;

/**
 * Get the control button elements and add event listeners to them
 */
controlButtons.forEach(btn => {
  btn.addEventListener('click', function () {
        ctrlBtnClicked(btn);
    });
});

/**
 * Set control buttons to hide and display relevent sections
 * Run selected game
 */
function ctrlBtnClicked(controlbutton) {
    if (controlbutton.id === 'how-to-btn') {
        welcomeBox.classList.add('hide');
        howToBox.classList.remove('hide');
    } else if (controlbutton.id === 'animal-btn') {
        replayBtn.dataset.game = 'Animals';
        startGame('Animals', animalQuestions);
    } else if (controlbutton.id === 'landmark-btn') {
        replayBtn.dataset.game = 'Landmarks';
        startGame('Landmarks', landmarkQuestions);
    } else {
        home();
    }
}

/**
 * Function to take you back to the
 * home section
 */
function home() {
    welcomeBox.classList.remove('hide');
    howToBox.classList.add('hide');
    questionBox.classList.add('hide');
    scoreBox.classList.add('hide');
    gameEndBox.classList.add('hide');
}

/**
 * Function to run selected game
 */
function startGame(selectedGame, selectedQuestions) {
    clearInterval(timerInterval);
    resetGame();
    runGame(selectedQuestions);
    gameType.innerText = '';
    gameType.innerText = selectedGame;
    
}

/**
 * Main function to run the game
 */
function runGame(questionArray) {
    welcomeBox.classList.add('hide');
    questionBox.classList.remove('hide');
    scoreBox.classList.remove('hide');
    howToBox.classList.add('hide');
    gameEndBox.classList.add('hide');

    // Shuffle questions
    shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
    shuffledQuestionIndex = 0;

    nextQuestion();
    startCountdown();
}

/**
 * Function to reset the state of the game
 */
function resetGame() {
    seconds = 10;
    score = 0;
    shuffledQuestionIndex = 0;
    imgBlur.style.filter = 'blur(20px)';
    scoreSpan.innerText = '0';
    timer.style.color = '';
}

//Code to make the next button call the reset function
nextButton.addEventListener('click', reset);

// Code to reset game when the home button is clicked
homeButton.addEventListener('click', function() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    //Resets blur and score
    imgBlur.style.filter = "blur(20px)";
    score = 0;
    scoreSpan.innerText = 0;
    home();
});

//To replay current game
replayBtn.addEventListener('click', function() {
    let replayGameType = this.dataset.game;
    if (replayGameType == 'Animals') {
        startGame(replayGameType, animalQuestions);
    } else if (replayGameType == 'Landmarks') {
        startGame(replayGameType, landmarkQuestions);
    }
});

/**
 * Function to set next question
 */
function nextQuestion() {
    showQuestion(shuffledQuestions[shuffledQuestionIndex]);
}

/**
 * Function to display the image
 * and answers for the question
 */
function showQuestion(question) {
    // Code to show question image
    imgBlur.src = question.imageSrc;
    populateAnswerButtons(question);
}

/**
 * Function to add answers to answer button elements,
 * remove event listeners from button elements to reset,
 * and to add correct dataset
 */
function populateAnswerButtons(question) {

    //Remove event listeners
    for (const button of answerButtons) {
        button.removeEventListener('click', checkAnswerClick);
    }

    //Displays answers on buttons
    question.answers.sort(() => Math.random() - 0.5);
    question.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.textContent = answer.text;
        
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
    let penalty = 5;
    resetButtons();
    if (correctAnswer) {
        disableButtons();
        //Shows image in full
        imgBlur.style.filter = "blur(0px)";
        button.classList.add('correct');
        ifRight(button, border);
        //Increments and displays score 
        score += seconds + 1;
        scoreSpan.innerText = score;
        //Points scored for current question
        timer.innerHTML = `You scored ${seconds + 1}!`;
        //Shows the next button
        nextButton.classList.remove('hide');
        //Stops timer when answer is correct
        clearInterval(timerInterval);
    } else {
        button.classList.add('incorrect');
        ifWrong(button, border);
        //Penalty for incorrect selection
        score -= penalty; 
        scoreSpan.innerText = score;
        //Exits function if incorrect
        return;
    }
}

/**
 * Function to make button grow and border to
 * turn green on correct answer for short time
 */
function ifRight(button, border) {
    button.classList.add('selected');
    border.classList.add('correct');
        setTimeout(() => {
            button.classList.remove('selected');
            border.classList.remove('correct');
          }, 1000);
}

/**
 * Function to make button buzz and border to 
 * turn red on incorrect answer for short time
 */
function ifWrong(button, border) {
    button.classList.add('clicked');
    border.classList.add('incorrect');
        setTimeout(() => {
            button.classList.remove('clicked');
            border.classList.remove('incorrect');
          }, 700);
}

/**
 * Funcion to disable the buttons
 * being clicked on
 */
function disableButtons() {
    answerButtons.forEach(btn => {
        btn.classList.add('disable');
    });
}

/**
 * Funcion to enable the buttons to
 * be clicked on
 */
function enableButtons() {
    answerButtons.forEach(btn => {
        btn.classList.remove('disable');
    });
}

/**
 * Function to reset the button colours
 */
function resetButtons() {

    //Loop to remove button classes
    for (const button of answerButtons) {
        button.classList.remove('correct', 'incorrect');
    }
}

/**
 * Function to reset everything for next question
 */
function reset() {
    //Resets blur
    imgBlur.style.filter = "blur(20px)";
    resetButtons();
    enableButtons();
    nextButton.classList.add('hide');
    //Clears timer
    clearInterval(timerInterval);
    startCountdown();
    //Code to get next question
    shuffledQuestionIndex++;

    if (shuffledQuestionIndex < 10) {
        //Code for smoother transition
        //between questions
        setTimeout(() => {
            nextQuestion();
        }, 500);
    } else {
        gameEndBox.classList.remove('hide');
        questionBox.classList.add('hide');
        scoreBox.classList.add('hide');
        //Displays score on game end 
        finalScoreSpan.innerText = score;
    }
}

let timerInterval;
/**
 * Function for countdown timer
 */
function startCountdown() {
    seconds = 10;

    let blur = 20;

    

    function updateTimer() {
        //Add countdown text to element
        timer.innerHTML = `${seconds} seconds`;

        // If seconds is less than 3 change font to red
        if (seconds < 4) {
            timer.style.color = '#FF3030';
        } else {
            // Reset font colour
            timer.style.color = '';
        }

        if (seconds > 0) {
            seconds--;
            //Dynamically reduces blur by -2px
            blur -= 2;
            imgBlur.style.filter = `blur(${blur}px)`;
        } else {
            disableButtons();
            clearInterval(timerInterval);
            timer.innerHTML = "0 points scored!";
            //Shows full image when timer runs out
            imgBlur.style.filter = `blur(0px)`;
            nextButton.classList.remove('hide');
        }
    }

    //Clears existing timer to stop overlapping
    //Placeholder text before countdown starts
    //Reset font colour
    timer.style.color = '';
    timer.innerHTML = 'Get Ready...';

    //Increments updateTimer code to run every one second
    timerInterval = setInterval(updateTimer, 1000);
}



