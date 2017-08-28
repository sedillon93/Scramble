'use strict';

var vowels = ['A', 'E', 'I', 'O', 'U'];

var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

var letterCount = 4;

var gameCount = 61;

function startLetterTimer() {

  var counter = setInterval(timer, 1000);

  function timer() {
    letterCount --;
    var letterCountDisplay = document.getElementById('letterTimer');
    letterCountDisplay.innerHTML = letterCount;
    if (letterCount <= 0) {
      clearInterval(counter);
       //counter ended; generate new letters and remove old letters
      resetLetterTimer();
    }
  }
}

function resetLetterTimer() {
  letterCount = 4;
  startLetterTimer();
}

//letter timer above, game timer below

function startGameTimer() {

  var counter = setInterval(timer, 1000);

  function timer() {
    gameCount --;
    var gameCountDisplay = document.getElementById('gameTimer');
    gameCountDisplay.innerHTML = gameCount;
    if (gameCount <= 0) {
      clearInterval(counter);
       //counter ended; end game: store the user's score in localStorage, redirect to high score page
    }
  }
}

function generateUpcomingLetters() {
  for (var i = 1; i < 6; i++) {
    var cell = document.getElementById('upcoming ' + i);
    cell.innerHTML = generateRandomLetter();
  }
}

function generateRandomLetter() {
  var vowelOrConsonant = Math.floor(Math.random() * 5);
  if (vowelOrConsonant <= 1) {
    var randomVowel = Math.floor(Math.random() * vowels.length);
    return vowels[randomVowel];
  }
  else {
    var randomConsonant = Math.floor(Math.random() * consonants.length);
    return consonants[randomConsonant];
  }
}

generateUpcomingLetters();

startLetterTimer();

startGameTimer();
