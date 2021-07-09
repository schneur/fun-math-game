//window.addEventListener('DOMContentLoaded', function () {

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

var timerSpan = document.body.querySelector("#timer");
var seconds = 10;
var timer = null;

var startTimer = function () {
  $('.gameInfo').text("GO, GO, GO!")
  if (!timer) {
    timer = setInterval(function () {
      timerSpan.innerHTML = --seconds;
      CheckTimer();
    }, 1000);
    $('.startTimer').hide(); 
  }
};

$('#user-input').on('keyup', function () {
  if (Number($(this).val()) === firstRandomNumber + secondRandomNumber) {
    timerSpan.innerHTML = ++seconds;
    $('#user-input').val("");
    getNewEquation();
  }
});  

var CheckTimer = function () {
  if (Number(timerSpan.innerHTML) === 0) {
    $('.gameInfo').text("Times up. press start to play again."); 
    window.clearInterval(timer);
    timer = null;
    seconds = 10;
    timerSpan.innerHTML = seconds;
    $('#user-input').val("");
    $('.startTimer').show();
  }
};
//});