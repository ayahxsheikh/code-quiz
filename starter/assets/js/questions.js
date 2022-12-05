// store ONLY data array of questions
//array of questions as objects

//quesions div in index html file has ID for questions, q-title, and choices
//choices html can be wrapped in button tags
// e.g. <button class = choice value = strings> 1. Strings </button>

// use class=hide on elements you need to hide


var questions = [
    {
        title: 'What does the acronym JS mean?',
        choices: ['javaStrings', 'javoScript', 'JS', 'javaScript'],
        answer: 'JavaScript'
    },
    { 
        title: 'Whch one of these is not a JavaScript type?',
        choices: ['element', 'strings', 'boolean', 'numbers'],
        answer: 'element'

    },
    {
        title: 'What is considered a loop in JS?',
        choices: ['for loop', 'for of loop', 'for in loop', 'all of the above'],
        answer: 'all of the above'
    },
    {
        title: 'Methods are attached to the end of  ___ in JS?',
        choices: ['loops', 'elements', 'objects', 'attributes'],
        answer: 'objects'
    }
];

//set up an index tracker 

var currentQuestionIndex = 0;