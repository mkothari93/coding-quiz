var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContentEl = document.getElementById("questionContent");
var questionTextEl = document.getElementById("questionText");
var answerContainer = document.getElementById("answerContainer")
var feedbackEl = document.getElementById("correctAnswer")

var highScoreEl = document.getElementById("highScore");
var scoreEl = document.getElementById("score")
var contentEl = document.getElementById("infoContent");
var quizContentEl = document.getElementById("quizContent");
var answerContentEl = document.getElementById("answerContent")
var btnEl = document.getElementById("btn");
var choiceA = document.getElementById("btn");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");

var answerEl = document.getElementById("correctAnswer");
var score = 0;
var questionIndex = 0;
var choicesEl = document.createElement("li");

//Questions from W3Schools website
//Array for questions, choices, and answer

var questions = [
  {
    question: "1) Inside which HTML element do we put the JavaScript?",
    choices: [ 
      {text: "A) <scripting>", correct: false}, 
      {text: "B) <js>", correct: false}, 
      {text: "C) <javascript>", correct: false}, 
      {text: "D) <script>",  correct: true}]
  },
  {
    question: "2) Where is the correct place to insert a JavaScript?",
    choices: [
      {text: "A) The <body> section", correct: false},
      {text: "B) The <head> section", correct: false},
      {text: "C) Both the <head> section and the <body> section are correct", correct: true},
      {text: "D) None of the above", correct: false}
    ]
  },
  {
    question:
      "3) What is the correct syntax for referring to an external script called 'script.js'?",
    choices: [
      {text: "A) <script href='script.js'", correct: false},
      {text:"B) <script name='script.js'", correct: false},
      {text:"C) <script src='script.js'", correct: true},
      {text:"D) <script='script.js'", correct: false},
    ]
  },
  {
    question: "4) How do you write 'Hello World' in an alert box?",
    choices: [
      {text:"A) alertBox('Hello World');", correct: false},
      {text:"B) alert('Hello World');", correct: true},
      {text:"C) msg('Hello World');", correct: false},
      {text:"D) msgBox('Hello World');", correct: false},
    ]
  },
  {
    question: "5) How do you create a function in JavaScript?",
    choices: [
      {text:"A) function myFunction()", correct: true},
      {text:"B) function = myFunction()", correct: false},
      {text:"C) function:myFunction()", correct: false},
      {text:"D) create myFunction()", correct: false},
    ]
  },
  {
    question: "6) How do you call a function named 'myFunction'?",
    choices: [
      {text:"A) call function myFunction()", correct: false},
      {text:"B) myFunction()", correct: true},
      {text:"C) call myFunction()", correct: false},
      {text:"D) call myFunction() function", correct: false},
    ]
  },
  {
    question: "7) How to write an IF statement in JavaScript?",
    choices: [
      {text: "A) if i=5", correct: false},
      {text: "B) if i==5 then", correct: false},
      {text: "C) if (i==5)", correct: true},
      {text: "D) if i=5 then", correct: false},
    ]
  },
  {
    question: "8) How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    choices: [
      {text: "A) if i<>5", correct: false},
      {text: "B) if i=!5 then", correct: false},
      {text: "C) if (i!=5)", correct: true},
      {text: "D) if (i<>5)", correct: false},
    ]
  },
  {
    question: "9) How does a FOR loop start?",
    choices: [
      {text: "A) for (i=0; i<=5; i++)", correct: true},
      {text: "B) for (i<=5; i++)", correct: false},
      {text: "C) for i=1 to 5", correct: false},
      {text: "D) for (i=0; i<=5)", correct: false},
    ]
  },
  {
    question: "10) How can you add a comment in a JavaScript?",
    choices: [
      {text: "A) //This is a comment", correct: true},
      {text: "B) <!--This is a comment-->", correct: false},
      {text: "C) -This is a comment-", correct: false},
      {text: "D) ~This is a comment~", correct: false},
    ]
  },
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
}

function startQuiz() {
  quizContentEl.style.display = "block";
  contentEl.classList.add('hide');
  scoreEl.classList.remove('hide');
  highScoreEl.classList.add('hide');
  scoreEl.innerText = "Score: " + (score);
  countdown();
  setNextQuestion();
}

function setNextQuestion () {
  resetQuestion();
  showQuestion(questions[questionIndex]);
}

function showQuestion (question) {
  console.log(question)
  questionTextEl.innerText = question.question
  question.choices.forEach(choice => {
    var button = document.createElement('button')
    button.innerText = choice.text
    button.classList.add('btn')
    if (choice.correct) {
      button.dataset.correct = choice.correct
      console.log("correct!")
    } 
    button.addEventListener('click', selectAnswer)
    answerContentEl.appendChild(button)
  })
}

function selectAnswer(e) {
  var selectedButton = e.target
  
  if (selectedButton.dataset.correct){
    console.log("Correct")
    score += 10
    scoreEl.innerText = "Score: " + (score);
    feedbackEl.textContent = "Correct!"
  } else {
    console.log("Wrong")
    feedbackEl.textContent = "Wrong..."
  }
  if(questions.length > questionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    quizContentEl.style.display = "none";
    contentEl.classList.remove('hide');
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
}

function resetQuestion() {
  nextButton.classList.add('hide')
  feedbackEl.textContent = ""
  while (answerContentEl.firstChild) {
    answerContentEl.removeChild(answerContentEl.firstChild)
  }
}

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  questionIndex++
  setNextQuestion()
})
