//Coding Logic 

// when clicked start button must trigger the timer 
// questions must shoow one at a time.
// next question is ONLY shown when user clicks one of the option buttons for current question.
// choices button does 2 things: sound for t/f and next q appears.

//subtract time from the timer if ans is incorrect 
// quiz should end if all q's are answered or when time runs out

//feedback will show user if they are t/f use setTimeOut
// setInterval will repeat after time is passed in.


//use function for start button that starts quiz when clicked.
// make var for current q where the value will be questions array index

var currentQuestionIndex = 0;
var questionWrapper = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');

function startQuiz() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = currentQuestion.title;
    //line 24 adds the question to the h2 element but its currently hidden, needs to show on button click.

    console.log(currentQuestion);
}

startQuiz();

//to output this in the browser you need to target html ids question div and give them innerTexts for e.g. the current question title
