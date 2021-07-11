function getRandomIntBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$('#user-input').hide();
var mathEquation = document.body.querySelector("#mathEquation");
var firstRandomNumber = 0;
var secondRandomNumber = 0;
var score = 0;
var highScore = 0;


var getNewEquation = function (equation) {
  firstRandomNumber = getRandomIntBetween(1,9);
  secondRandomNumber = getRandomIntBetween(1,9);
  mathEquation.innerHTML = firstRandomNumber + '+' + secondRandomNumber;
};

getNewEquation();

var timerSpan = document.body.querySelector("#timer");
var seconds = 10;
var timer = null;

var startTimer = function () {
  $('.gameInfo').text("GO, GO, GO!");
  $('#user-input').show();
  score = 0;
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
    score += 1;
    $('.score').text("score: " + score);
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
    $('#user-input').hide();
    updateHighScore();
    $('#user-input').val("");
    $('.startTimer').show();
  }
};

 var updateHighScore = function () {
   if (score > highScore) {
     highScore = score;
     $('.highScore').text("your high score: " + highScore);
   };
 };
