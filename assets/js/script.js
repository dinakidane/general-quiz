
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
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    prevBtn.classList.add("hide")
 }

 beginQuiz()

 /**
  * function restart() will reset score, reset the current question index and remove the 'hide' class from elements
  */ 

 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz()
}

/**
 * function next() will jump to next question
 * currentQuestion() will be incremented
 * hidden class will be removed from prev button
 * score will be incremnted based on option the user selects
 */

function next() {
    currentQuestion++;
    if (currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 3) {
                score++
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next()
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score <3) {
                score ++
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }
    prevBtn.classList.remove("hide");
}

/**
 * function prev() jump to previous question
 * currentQuestion will be decremented and hidden class removed from next button
 * score will be incremented based on user score
 */

function prev() {
    currentQuestion--;
    if (currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score< 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score <3) {
                score ++
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }
    nextBtn.classList.remove("hide");

}

/**
 * Create submit button, hiding all elements except restart button and score
 * It'll add a congratulations message
 */

function submit() {
    prevBtn.classList.add("hide");
    prevBtn.classList.add("hide");
    prevBtn.classList.add("hide");
    prevBtn.classList.add("hide");
    prevBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on submitting the Quiz"
}