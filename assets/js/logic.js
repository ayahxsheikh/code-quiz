//Coding Logic 

//Gloabal Variables
var time = document.querySelector('#time');
var timer = 60;
var startBtn = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var currentQuestionIndex = 0;
var divQuestions = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOut = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var soundCorrect = new Audio(src="assets/sfx/correct.wav");
var soundIncorrect = new Audio(src="assets/sfx/incorrect.wav");
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');


//FUNCTION TO START.
function startQuiz () {
    var start = startBtn.addEventListener('click', function(){
        console.log('start button clicked');
        startScreen.classList.add('hide');
        showQuestions();
    });
    
} startQuiz();

//SETTING TIMER:
var timeCounter = setInterval(function(){
    time = timer;
    timer--;
    // console.log('counting down');
    
},1000);



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
        // console.log(isCorrect);
        
        choicesOut.insertAdjacentHTML('beforeend',`<button data-correct=${isCorrect}>${choice}</button>`); 
        // console.log(currentQuestion.answer === choice);
    }
    
    divQuestions.classList.remove('hide');
} 

//FUNCTION FOR CHECKING ANSWERS:
function checkAns(event){
    if (event.target.dataset.correct === 'false') {
        console.log('answer is wrong');
        displayFeedback(event.target.dataset.correct);
        nextQuestion();

    } else {
        console.log('answer is correct!');
        displayFeedback(event.target.dataset.correct);
        nextQuestion();
    }
    feedback.classList.remove('hide');
    };
    
 choicesOut.addEventListener('click', checkAns);

//FUNCTION FOR NEXT QUESTION:
function nextQuestion (){
    if (currentQuestionIndex < questions.length-1) {    
        currentQuestionIndex++;
        showQuestions();

    } else {
        divQuestions.classList.add('hide');
        // feedback.classList.add('hide');
        endScreen.classList.remove('hide');
        finalScore.innerHTML = timer;
    }
}

//FUNCTION FOR DISPLAY FEEDBACK:
 function displayFeedback(clickedAns){  //para for ref passed in top
    if (clickedAns === 'false'){
        feedback.innerHTML = 'Incorrect';
        
    } else {
        feedback.innerHTML = 'Correct!';
    }

    feedback.classList.remove('hide');
 }

//STORING INITIALS


//subtract time from the timer if ans is incorrect 
// quiz should end if all q's are answered or when time runs out

//feedback will show if user gets qs t/f use setTimeOut
