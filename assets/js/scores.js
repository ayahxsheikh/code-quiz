//THIS JS FILE SHOULD:

// the submit button next to enter initials should link (href ='') to the highscores html page.

// load scores from local storage 
// show them on screen when loaded
// make an array and an object of highschores {score: initials:}
// use setItem and getItem as dyniamic values/strings to store user highscores

//output their score using final score id - getelementby

console.log('connected');

var scores = JSON.parse(localStorage.getItem('highscore')) || [];
console.log(scores);


var hiEl = document.querySelector('#highscores');
var clear = document.querySelector('#clear');

for (let i = 0; i < scores.length; i++){
    console.log(scores[i].initials);
    var li = document.createElement('li')
    //creating an li to display the initial and score
    var userIn = document.createElement('span')
    var scores = document.createElement('span')
    //created the span so each score/initial is displaye as IN-line of the li
    userIn.textContent = scores[i].initials;
    scores.textContent = scores[i].scores;
    //textContent is displaying info for the span
    li.append(userIn, scores)
    hiEl.append(li)
}