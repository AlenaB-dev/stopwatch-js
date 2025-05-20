let miliseconds = 0;
const interval = 10;

const onesPlaceMilisec = document.querySelector(".onesPlaceMiliSeconds");
const tensPlaceMilisec = document.querySelector(".tensPlaceMiliSeconds");
const hundredsPlaceMilisec = document.querySelector(".hundresPlaceMiliseonds");

let timer;

function startStopwatch() {
  timer = setInterval(() => {
    miliseconds += interval;

    let ms = miliseconds % 1000;
    let hundreds = Math.floor(ms / 100);
    let tens = Math.floor((ms % 100) / 10);
    let ones = ms % 10;

    onesPlaceMilisec.style.transform = `translateY(-${ones * 40}px)`;
    tensPlaceMilisec.style.transform = `translateY(-${tens * 40}px)`;
    hundredsPlaceMilisec.style.transform = `translateY(-${hundreds * 40}px)`;
  }, interval);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  miliseconds = 0;
  onesPlaceMilisec.style.transform = `translateY(0px)`;
  tensPlaceMilisec.style.transform = `translateY(0px)`;
  hundredsPlaceMilisec.style.transform = `translateY(0px)`;
}

document
  .getElementById("button-start")
  .addEventListener("click", startStopwatch);
document.getElementById("button-stop").addEventListener("click", stopStopwatch);
document
  .getElementById("button-reset")
  .addEventListener("click", resetStopwatch);
