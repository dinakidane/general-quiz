
/**
 * Const Variables
 * Create variables that represents elements in our document
 * these variables will be used to access the elements via DOM model
 */

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

/**
 * Defining variables that will be used to maintain 3 important things for interacitivity
 * counter for current question, enable JS to access right question by 
 *      incrementing or decrementing this counter based on the user's 
 *      interactivity with previous and next buttons
 * counter for the score, for every correct answer, score will be incremented
 *      score will be decremented for every wrong answer
 * an array of quesions, contains our questions and the options for the same
 */

let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question: "Is Coding Ninjas the best online learning platform?",
        answers: [
            {option: "For Sure!", answer: true},
            {option: "No, not at all.", answer: false},
        ]
    },
    {
        question: "What is better if you wish to achieve success?",
        answers: [
            {option: "Hard Work", answer: false},
            {option: "Smart Work", answer: true},
        ]
    },
    {
 
        question: "Complete the phrase: Time and ___ wait for none.",
        answers: [
            {option: "Batman", answer: false},
            {option: "Tide", answer: true},
        ]
    }
 ]

 /**
  * Adding onclick events to the button will call the appropiate functions when a particular button is clicked
  */

 restartBtn.addEventListener("click", restart);
 prevBtn.addEventListener("click", prev);
 nextBtn.addEventListener("click", next);
 submitBtn.addEventListener("click", submit);

 /**
  * function beginQuiz() will get executed when page loads and script gets executed
  * Added a feature that'll allow page to jump to the next question once an option is clicked on from answer options
  */

 function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length
 }