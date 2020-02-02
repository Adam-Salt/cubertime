var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var lap = document.getElementById("lap");

var watch = new Stopwatch(timer);

function start() {
  toggleBtn.textContent = 'Stop';
  watch.reset();
  watch.start();
  
}

function stop() {
  toggleBtn.textContent = 'Start';
  watch.stop();
  lapsDetails.innerHTML += `<li>${document.getElementById("timer").textContent}</li>`
}



toggleBtn.addEventListener('click', function() {
  watch.isOn ? stop() : start();
});

