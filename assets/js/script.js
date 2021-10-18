var timerEl = document.getElementById("timer");
var highScoreEl = document.getElementsByClassName("highScores");
var contentEl = document.getElementById("infoContent");
var btnEl = document.getElementById("btn")

//Questions from W3Schools website
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?"
        choices: ["A) <scripting>", "B) <js>", "C) <javascript>", "D) <script>" ]
        answer: "D) <script>"
    },
    {
        question: 
        choices:
        answer:
    },
    {
        question:
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
    {
        question: 
        choices: 
        answer:
    },
]

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
            timerEl.textContent = "Time Left: " + timeLeft + " second remaining";;
            timeLeft--;
        } else {
            // Clear the timer once time reaches 0 and display times up
            timerEl.textContent = "Times Up!";
            clearInterval(timeInterval);
        }
    }, 1000);
};


function quizStart() {
    //Hide the info content
    contentEl.textContent = " ";
    countdown();
};

btnEl.addEventListener("click", quizStart);
