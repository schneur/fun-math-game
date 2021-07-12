function getRandomIntBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var usersOperaters = ['+'];
var currentOperater = [];

$('.equations').on('click', function () {
  usersOperaters = [];
  $(".equations").each( function( index, element ){
    if ($(element).is(':checked')) {
    usersOperaters.push(($(this).val()))
    }
  });
});

var randomOperater = function () {
  currentOperater = usersOperaters[Math.floor(Math.random() * usersOperaters.length)];
};

$('#user-input').hide();
var mathEquation = document.body.querySelector("#mathEquation");
var firstRandomNumber = 0;
var secondRandomNumber = 0;
var score = 0;
var highScore = 0;
var add = /\+/;
var subtract = /\-/;

var swapNumbers = function () {
  if (subtract.test(currentOperater)) {
    if (firstRandomNumber < secondRandomNumber ) {
      var a = firstRandomNumber;
      var b = secondRandomNumber;
      firstRandomNumber = b;
      secondRandomNumber = a;
    }
  }
};

var getNewEquation = function () {
  randomOperater();
  firstRandomNumber = getRandomIntBetween(1,9);
  secondRandomNumber = getRandomIntBetween(1,9);
  swapNumbers();
  mathEquation.innerHTML = firstRandomNumber + " " + currentOperater + " " + secondRandomNumber;
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
  if (add.test(currentOperater)) {
    console.log('kkk')
    plus(); 
} else if (subtract.test(currentOperater)) {
  minus();
} else {
  times();
}
});  

var plus = function () {
  if (Number($('#user-input').val()) === firstRandomNumber + secondRandomNumber) {
    correctAnswer();
  }
};

var minus = function () {
  if (Number($('#user-input').val()) === firstRandomNumber - secondRandomNumber) {
    correctAnswer();
  }
};

var times = function () {
  if (Number($('#user-input').val()) === firstRandomNumber * secondRandomNumber) {
    correctAnswer();
  }
};

var correctAnswer = function () {
  timerSpan.innerHTML = ++seconds;
  score += 1;
  $('.score').text("score: " + score);
  $('#user-input').val("");
  getNewEquation();
}

var CheckTimer = function () {
  if (Number(timerSpan.innerHTML) === 0) {
    $('.gameInfo').text("Times up. press start to play again."); 
    window.clearInterval(timer);
    timer = null;
    seconds = 10;
    timerSpan.innerHTML = seconds;
    $('#user-input').hide();
    updateHighScore();
    getNewEquation();
    $('#user-input').val("");
    $('.startTimer').show();
  }
};

 var updateHighScore = function () {
   if (score > highScore) {
     highScore = score;
     $('.highScore').text("your high score: " + highScore);
   };
  }
