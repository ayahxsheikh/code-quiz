//Coding Logic 

//Gloabal Variables
var time = document.querySelector('#time');
var startBtn = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var currentQuestionIndex = 0;
var divQuestions = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOut = document.querySelector('#choices');


//FUNCTION TO START.
function startQuiz () {
    var start = startBtn.addEventListener('click', function(){
        console.log('start button clicked');
        //clear start-screen before showQuestions
        startScreen.classList.add('hide');
        showQuestions();
    });
    
} startQuiz();


//FUNCTION TO DISPLAY Q'S:

function showQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var h2 = questionTitle.innerText = currentQuestion.title; 
    // console.log(h2); 
    
    var userChoices = currentQuestion.choices;
    // console.log(currentQuestion);
    //innerHtml empty string to insert dynamic buttons
    choicesOut.innerHTML = ' ';
    
    for (var i = 0; i < userChoices.length; i++) {
        var choice = userChoices[i];
        var isCorrect = currentQuestion.answer === choice;
        // console.log(choice);
        
        choicesOut.insertAdjacentHTML('beforeend',`<button data-correct=${isCorrect}>${choice}</button>`); 
        console.log(isCorrect);
    }
    divQuestions.classList.remove('hide');
};
        




//subtract time from the timer if ans is incorrect 
// quiz should end if all q's are answered or when time runs out

//feedback will show if user gets qs t/f use setTimeOut
// setInterval will repeat after time is passed in.