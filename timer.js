let timer = document.querySelector("#timer");
let clock = document.querySelector("#clock");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
console.log(timer);

let timeMin = "05";
let timeSec = "00";
let timeArr = [timeMin, timeSec];

writeTime();

function writeTime() {
  clock.innerHTML = `${timeMin}m : ${timeSec}s`;
}

// let countStart = 0;
// let countStop = 0;
let sI;
let isTimerActive = false;
function startTime() {
  if (+timeSec !== 0) {
    if (isTimerActive) {
      timeSec -= 1;
    }
  } else if (+timeMin === 0 && +timeSec === 0) {
    console.log("Your Time is Over");
    stopInterval();
  } else {
    timeMin -= 1;
    timeSec = 59;
  }
  writeTime();
}

start.addEventListener("click", (e) => startInterval());

function startInterval() {
  sI = !isTimerActive && setInterval(startTime, 1000);
  isTimerActive = true;
}

stop.addEventListener("click", () => stopInterval());
function stopInterval() {
  clearInterval(sI);
  isTimerActive = false;
}

reset.addEventListener("click", (e) => {
  clock.innerHTML = `${timeArr[0]}m : ${timeArr[1]}s`;
  stopInterval();
});
