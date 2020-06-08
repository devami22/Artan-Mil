var randomNumber1 = Math.floor(Math.random() * 6) + 1; //dice ONE
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //dice TWO


var randomDice1 = "dice" + randomNumber1 + ".png";
var randomDice2 = "dice" + randomNumber2 + ".png";

var imageSource1 = "images/" + randomDice1;
var imageSource2 = "images/" + randomDice2;


var diceOne = document.querySelectorAll("img")[0];

diceOne.setAttribute("src", imageSource1);

var diceTwo = document.querySelectorAll('img')[1];

diceTwo.setAttribute('src', imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩"
}
else {
    document.querySelector('h1').innerHTML = "Draw!"
}