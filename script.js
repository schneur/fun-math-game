
var timerSpan = document.body.querySelector("#timer");
var seconds = 0;
var timer = null;

var startTimer = function () {
  if (!timer) {
    timer = setInterval(function () {
      timerSpan.innerHTML = ++seconds;
    }, 1000);
  }
};

var restartTimer = function () {
  window.clearInterval(timer);
  seconds = 0;
  timer = null;
  timerSpan.innerHTML = seconds;
};
    