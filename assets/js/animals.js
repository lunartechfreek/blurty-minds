/* jshint esversion: 11 */

// Animal Questions
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