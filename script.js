//$(document).ready(function () {

function getRandomIntBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mathEquation = document.body.querySelector("#mathEquation");
var firstRandomNumber = 0;
var secondRandomNumber = 0;


var getNewEquation = function () {
  firstRandomNumber = getRandomIntBetween(1,9);
  secondRandomNumber = getRandomIntBetween(1,9);
  mathEquation.innerHTML = firstRandomNumber + " + " + secondRandomNumber;
};

getNewEquation();

$('#user-input').on('keyup', function () {
  if (Number($(this).val()) === firstRandomNumber + secondRandomNumber) {
    console.log("yay");
    ++seconds;
  }
});



var timerSpan = document.body.querySelector("#timer");
var seconds = 10;
var timer = null;

var startTimer = function () {
  if (!timer) {
    timer = setInterval(function () {
      timerSpan.innerHTML = --seconds;
    }, 1000);
  }
};

var restartTimer = function () {
  window.clearInterval(timer);
  seconds = 10;
  timer = null;
  timerSpan.innerHTML = seconds;
};
  
//});