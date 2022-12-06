//Coding Logic 

// when clicked start button must trigger the timer 
// questions must show one at a time.
// next question is ONLY shown when user clicks one of the option buttons for current question.
// choices button does 2 things: sound for t/f and next q appears.

//Gloabal Variables
var time = document.querySelector('#time');
var startBtn = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');


//function for start button that starts quiz when clicked.
function startQuiz () {
    var start = startBtn.addEventListener('click', function(){
        console.log('start button clicked');
        //clear start-screen before showQuestions
        startScreen.classList.add('hide');
        showQuestions();
    });
    
} startQuiz();


var currentQuestionIndex = 0;
var divQuestions = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOut = document.querySelector('#choices');

function showQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var h2 = questionTitle.innerText = currentQuestion.title; 
    // console.log(h2); 
    
    var userChoices = currentQuestion.choices;
    //need innerHtml as empty string to insert dynamic buttons
    
    choicesOut.innerHTML = ' ';
    
    for (var i = 0; i < userChoices.length; i++) {
        var choice = userChoices[i];
        console.log(choice);
        
        choicesOut.insertAdjacentHTML('beforeend',`<button>${choice}</button>`); 
        //template literal to add choice dynamically
    }
    // console.log(currentQuestion);
    
    divQuestions.classList.remove('hide');
}

// showQuestions();



//subtract time from the timer if ans is incorrect 
// quiz should end if all q's are answered or when time runs out

//feedback will show if user gets qs t/f use setTimeOut
// setInterval will repeat after time is passed in.