/* jshint esversion: 11, jquery: true */

/**
 * Wait for the dom to finish loading before running the game
 * Get the intro button elements and add event listeners to them
 * Set intro buttons to hide and display relevent sections
 */
document.addEventListener("DOMContentLoaded", function() {
    let controlButtons = document.getElementsByClassName('ctrl-btn');

    for (let controlbutton of controlButtons) {
        controlbutton.addEventListener('click', function () {
            if (controlbutton.id === 'how-to-btn') {
                welcomeBox.classList.add('hide');
                howToBox.classList.remove('hide');
            } else if (controlbutton.id === 'animal-btn') {
                displayAnimalQuestions();
            } else if (controlbutton.id === 'landmark-btn') {
                displayLandmarkQuestions();
            } else {
                home();
            }
            
        });
    }

});

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

let shuffledQuestions, shuffledQuestionIndex;

let replayAnimals = document.getElementById('replay-animals');
let replayLandmarks = document.getElementById('replay-landmarks');

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
 * Function to display animal questions
 */
function displayAnimalQuestions() {
    clearInterval(timerInterval);
    resetGame();
    runGame(animalQuestions);
    gameType.innerText = '';
    gameType.innerText = 'Animals';
    replayAnimals.classList.remove('hide');
    replayLandmarks.classList.add('hide');
}

/**
 * Function to display landmark questions
 */
function displayLandmarkQuestions() {
    clearInterval(timerInterval);
    resetGame();
    runGame(landmarkQuestions);
    gameType.innerText = '';
    gameType.innerText = 'Landmarks';
    replayLandmarks.classList.remove('hide');
    replayAnimals.classList.add('hide');
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
replayAnimals.addEventListener('click', displayAnimalQuestions);
replayLandmarks.addEventListener('click', displayLandmarkQuestions);

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

let border = document.getElementById('image-border');

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

let timer = document.getElementById('timer');

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

// Game Questions 
let animalQuestions = [
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
];

let landmarkQuestions = [
    {
        imageSrc: 'assets/images/landmarks/arc-de-triomphe.webp',
        answers: [
            { text: 'Arc De Triomphe', correct: true },
            { text: 'London Bridge', correct: false },
            { text: 'Wellington Arch', correct: false },
            { text: 'Gateway Arch', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/bellagio.webp',
        answers: [
            { text: 'Plaza Hotel', correct: false },
            { text: 'Caesars Palace', correct: false },
            { text: 'The Bellagio', correct: true },
            { text: 'The Luxor', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/big-ben.webp',
        answers: [
            { text: 'Blackpool Tower', correct: false },
            { text: 'Big Ben', correct: true },
            { text: 'Eiffel Tower', correct: false },
            { text: 'Peace Tower', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/brooklyn-bridge.webp',
        answers: [
            { text: 'Golden Gate Bridge', correct: false },
            { text: 'Manhattan Bridge', correct: false },
            { text: 'Williamsburg Bridge', correct: false },
            { text: 'Brooklyn Bridge', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/buckingham-palace.webp',
        answers: [
            { text: 'Buckingham Palace', correct: true },
            { text: 'The Vatican', correct: false },
            { text: 'Versailles Palace', correct: false },
            { text: 'The White House', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/burj-khalifa.webp',
        answers: [
            { text: 'Empire State Building', correct: false },
            { text: 'Space Needle', correct: false },
            { text: 'Burj Khalifa', correct: true },
            { text: 'Eiffel Tower', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/central-park.webp',
        answers: [
            { text: 'Machu Pichu', correct: false },
            { text: 'Central Park', correct: true },
            { text: 'Stone Henge', correct: false },
            { text: 'Snowden', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/chichen-itsa.webp',
        answers: [
            { text: 'The Great Pyramid', correct: false },
            { text: 'Pyramid Of The Sun', correct: false },
            { text: 'Tikal Pyramid', correct: false },
            { text: 'Chichen Itsa', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/christ-redeemer.webp',
        answers: [
            { text: 'Christ The Redeemer', correct: true },
            { text: 'Statue Of Liberty', correct: false },
            { text: 'Spring Temple Buddha', correct: false },
            { text: 'The Little Mermaid', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/colosseum.webp',
        answers: [
            { text: 'Verona Arena', correct: false },
            { text: 'Pula Arena', correct: false },
            { text: 'Rome Colosseum', correct: true },
            { text: 'Nimes Amphitheatre', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/eiffel-tower.webp',
        answers: [
            { text: 'Blackpool Tower', correct: false },
            { text: 'Eiffel Tower', correct: true },
            { text: 'Tashkent Tower', correct: false },
            { text: 'Avala Tower', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/golden-gate-bridge.webp',
        answers: [
            { text: 'Brooklyn Bridge', correct: false },
            { text: 'London Bridge', correct: false },
            { text: 'Iron Bridge', correct: false },
            { text: 'Golden Gate Bridge', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/great-wall.webp',
        answers: [
            { text: 'Great Wall Of China', correct: true },
            { text: 'Hadrian`s Wall', correct: false },
            { text: 'Berlin Wall', correct: false },
            { text: 'Wall Of Jericho', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/hollywood-sign.webp',
        answers: [
            { text: 'Machu Pichu', correct: false },
            { text: 'Snowden', correct: false },
            { text: 'Hollywood Hill', correct: true },
            { text: 'Mount Fuji', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/london-bridge.webp',
        answers: [
            { text: 'Golden Gate Bridge', correct: false },
            { text: 'London Bridge', correct: true },
            { text: 'Chapel Bridge', correct: false },
            { text: 'Brooklyn Bridge', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/london-eye.webp',
        answers: [
            { text: 'Singapore Flyer', correct: false },
            { text: 'Seattle Great Wheel', correct: false },
            { text: 'Wheel Of Liverpool', correct: false },
            { text: 'London Eye', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/machu-pichu.webp',
        answers: [
            { text: 'Machu Pichu', correct: true },
            { text: 'Hollywood Hill', correct: false },
            { text: 'Mount Fuji', correct: false },
            { text: 'Himalayas', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/mount-everest.webp',
        answers: [
            { text: 'Mount Fuji', correct: false },
            { text: 'Kilimanjaro', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Mount Etna', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/mount-fuji.webp',
        answers: [
            { text: 'Mount Everest', correct: false },
            { text: 'Mount Fuji', correct: true },
            { text: 'Mount Olympus', correct: false },
            { text: 'Ben Nevis', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/opera-house.webp',
        answers: [
            { text: 'Teatro Colon', correct: false },
            { text: 'Opera Bastille', correct: false },
            { text: 'Teatro La Fenice', correct: false },
            { text: 'Sydney Opera House', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/petra.webp',
        answers: [
            { text: 'Petra', correct: true },
            { text: 'The Great Pyramid', correct: false },
            { text: 'The Sphinx', correct: false },
            { text: 'The Grand Canyon', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/statue-of-liberty.webp',
        answers: [
            { text: 'Christ The Redeemer', correct: false },
            { text: 'Venus De Milo', correct: false },
            { text: 'Statue Of Liberty', correct: true },
            { text: 'Discobolus', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/taj-mahal.webp',
        answers: [
            { text: 'Al-Aqsa Mosque', correct: false },
            { text: 'Taj Mahal', correct: true },
            { text: 'Shah Mosque', correct: false },
            { text: 'Mecca Mosque', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/times-square.webp',
        answers: [
            { text: 'Piccadilly Circus', correct: false },
            { text: 'Shibuya', correct: false },
            { text: 'Sunset Strip', correct: false },
            { text: 'Times Square', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/vegas-sign.webp',
        answers: [
            { text: 'Las Vegas Sign', correct: true },
            { text: 'NY Subway Sign', correct: false },
            { text: 'Radio City Sign', correct: false },
            { text: 'Kings Cross Sign', correct: false }
        ]
    }
];
