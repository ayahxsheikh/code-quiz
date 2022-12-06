//Coding Logic 

// when clicked start button must trigger the timer 
// questions must show one at a time.
// next question is ONLY shown when user clicks one of the option buttons for current question.
// choices button does 2 things: sound for t/f and next q appears.

// function for start button that starts quiz when clicked.
var time = document.querySelector('#time');
var startBtn = document.querySelector('#start');

var start = startBtn.addEventListener('click', function(){
    console.log('start button clicked');
});

var currentQuestionIndex = 0;
var divQuestions = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOut = document.querySelector('#choices');


// make var for current q where the value will be the questions array index

function showQuestions() {
    divQuestions.className = 'show';
    var currentQuestion = questions[currentQuestionIndex];
    var h2 = questionTitle.innerText = currentQuestion.title; 
    // console.log(currentQuestion.title); 
    
    var choices = currentQuestion.choicesOut;
    // console.log(currentQuestion.);
}

// showQuestions();







//subtract time from the timer if ans is incorrect 
// quiz should end if all q's are answered or when time runs out

//feedback will show if user gets qs t/f use setTimeOut
// setInterval will repeat after time is passed in.