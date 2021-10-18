var timerEl = document.getElementById("timer");
var highScoreEl = document.getElementsByClassName("highScores");
var contentEl = document.getElementById("infoContent");
var btnEl = document.getElementById("btn");
var btnAEl = document.getElementById("btnA");
var btnBEl = document.getElementById("btnB");
var btnCEl = document.getElementById("btnC");
var btnDEl = document.getElementById("btnD");
var questionTextEl = document.getElementById("questionText");
var quizContentEl = document.getElementById("quizContent");

//Questions from W3Schools website
//Array for questions, choices, and answer
var quizContent = [
    {
        question: "1) Inside which HTML element do we put the JavaScript?",
        choices: ["A) <scripting>", "B) <js>", "C) <javascript>", "D) <script>" ],
        answer: "D) <script>"
    },
    {
        question: "2) Where is the correct place to insert a JavaScript?",
        choices: ["A) The <body> section", "B) The <head> section", "C) Both the <head> section and the <body> section are correct", "D) None of the above"],
        answer: "C) Both the <head> section and the <body> section are correct"
    },
    {
        question: "3) What is the correct syntax for referring to an external script called 'script.js'?",
        choices: ["A) <script href='script.js'", "B) <script name='script.js'", "C) <script src='script.js'", "D) <script='script.js'"],
        answer: "C) <script src='script.js'"
    },
    {
        question: "4) How do you write 'Hello World' in an alert box?",
        choices: ["A) alertBox('Hello World');", "B) alert('Hello World');", "C) msg('Hello World');", "D) msgBox('Hello World');"],
        answer: "B) alert('Hello World');"
    },
    {
        question: "5) How do you create a function in JavaScript?",
        choices: ["A) function myFunction()", "B) function = myFunction()", "C) function:myFunction()", "D) create myFunction()"],
        answer: "A) function myFunction()"
    },
    {
        question: "6) How do you call a function named 'myFunction'?",
        choices: ["A) call function myFunction()", "B) myFunction()", "C) call myFunction()", "D) call myFunction() function"],
        answer: "B) myFunction()"
    },
    {
        question: "7) How to write an IF statement in JavaScript?",
        choices: ["A) if i=5", "B) if i==5 then", "C) if (i==5)", "D) if i=5 then"],
        answer: "C) if (i==5)"
    },
    {
        question: "8) How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["A) if i<>5", "B) if i=!5 then", "C) if (i!=5)", "D) if (i<>5)"],
        answer: "C) if (i !=5)"
    },
    {
        question: "9) How does a FOR loop start?",
        choices: ["A) for (i=0; i<=5; i++)", "B) for (i<=5; i++)", "C) for i=1 to 5", "D) for (i=0; i<=5)"],
        answer: "A) for (i=0; i<=5; i++)"
    },
    {
        question: "10) How can you add a comment in a JavaScript?",
        choices: ["A) //This is a comment", "B) <!--This is a comment-->", "C) -This is a comment-", "D) ~This is a comment~"],
        answer: "A) //This is a comment"
    }
];

// Countdown function
function countdown() {
    var timeLeft = 89;
    // setInterval() method to call a function to be executed every second
    var timeInterval = setInterval(function () {
        // If Else statement to display the time left and seconds remaining and decrement the time by 1
        if (timeLeft > 1) {
            timerEl.textContent = "Time Left: " + timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = "Time Left: " + timeLeft + " second remaining";
            timeLeft--;
        } else {
            // Clear the timer once time reaches 0 and display times up
            timerEl.textContent = "Times Up!";
            clearInterval(timeInterval);
        }
    }, 1000);
};

function quizQuestionsAndAnswers() {
    questionTextEl.textContent = quizContent[0].question;
    btnAEl.textContent = quizContent[0].choices[0];
    btnBEl.textContent = quizContent[0].choices[1];
    btnCEl.textContent = quizContent[0].choices[2];
    btnDEl.textContent = quizContent[0].choices[3];
};

function quizStart() {
    quizContentEl.style.display = "block";
    //Hide the info content
    contentEl.textContent = " ";
    countdown();
    quizQuestionsAndAnswers ();
};

btnEl.addEventListener("click", quizStart);
