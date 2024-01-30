document.addEventListener("DOMContentLoaded", function () {
    // Counter
    const counterValue = document.getElementById("value");
    const decreaseBtn = document.querySelector(".counter .btn.decrease");
    const resetBtn = document.querySelector(".counter .btn.reset");
    const increaseBtn = document.querySelector(".counter .btn.increase");
  
    let counter = 0;
  
    decreaseBtn.addEventListener("click", function () {
      counter--;
      updateCounter();
    });
  
    resetBtn.addEventListener("click", function () {
      counter = 0;
      updateCounter();
    });
  
    increaseBtn.addEventListener("click", function () {
      counter++;
      updateCounter();
    });
  
    function updateCounter() {
      counterValue.textContent = counter;
    }
    
//   Stopwatch
    const timerValue = document.getElementById("timer");
    const startBtn = document.querySelector(".stopwatch .btn.start");
    const resetStopwatchBtn = document.querySelector(".stopwatch .btn.reset");
    const stopBtn = document.querySelector(".stopwatch .btn.stop");
  
    let timer = 0;
    let timerInterval;
  
    startBtn.addEventListener("click", function () {
      timerInterval = setInterval(function () {
        timer++;
        updateTimer();
      }, 1000);
    });
  
    stopBtn.addEventListener("click", function () {
      clearInterval(timerInterval);
    });
  
    resetStopwatchBtn.addEventListener("click", function () {
      timer = 0;
      updateTimer();
      clearInterval(timerInterval);
    });
  
    function updateTimer() {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;
  
      timerValue.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  });