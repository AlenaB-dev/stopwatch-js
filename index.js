let miliseconds = 0;
const interval = 10;

const onesPlaceMilisec = document.querySelector(".onesPlaceMiliSeconds");
const tensPlaceMilisec = document.querySelector(".tensPlaceMiliSeconds");
const hundredsPlaceMilisec = document.querySelector(".hundresPlaceMiliseonds");
const onesPlaceSec = document.querySelector(".onesPlaceSeconds");
const tensPlaceSec = document.querySelector(".tensPlaceSeconds");
const onesPlaceMin = document.querySelector(".onesPlaceMinutes");
const tensPlaceMin = document.querySelector(".tensPlaceMinutes");
const onesPlaceHours = document.querySelector(".onesPlaceHours");
const tensPlaceHours = document.querySelector(".tensPlaceHours");

let timer;

function startStopwatch() {
  timer = setInterval(() => {
    miliseconds += interval;

    let ms = miliseconds % 1000;
    let hundreds = Math.floor(ms / 100);
    let tens = Math.floor((ms % 100) / 10);
    let ones = ms % 10;
    let seconds = Math.floor(miliseconds / 1000) % 60;
    let secTens = Math.floor(seconds / 10);
    let secOnes = seconds % 10;
    let minutes = Math.floor(miliseconds / 1000 / 60) % 60;
    let minTens = Math.floor(minutes / 10);
    let minOnes = minutes % 10;
    let hours = Math.floor(miliseconds / 1000 / 60 / 60);
    let hourTens = Math.floor(hours / 100);
    let hourOnes = hours % 10;

    onesPlaceMilisec.style.transform = `translateY(-${ones * 40}px)`;
    tensPlaceMilisec.style.transform = `translateY(-${tens * 40}px)`;
    hundredsPlaceMilisec.style.transform = `translateY(-${hundreds * 40}px)`;
    onesPlaceSec.style.transform = `translateY(-${secOnes * 40}px)`;
    tensPlaceSec.style.transfrom = `translateY(-${secTens * 40}px)`;
    onesPlaceMin.style.transform = `translateY(-${minOnes * 40}px)`;
    tensPlaceMin.style.transform = `translateY(-${minTens * 40}px)`;
    onesPlaceHours.style.transform = `translateY(-${hoursOnes * 40}px)`;
    tensPlaceHours.style.transform = `translateY(-${hourTens * 40}px)`;
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
  onesPlaceSec.style.transform = `translateY(0px)`;
  tensPlaceSec.style.transfrom = `translateY(0px)`;
  onesPlaceMin.style.transform = `translteY(0px)`;
  tensPlaceMin.style.transform = `translateY(opx)`;
  onesPlaceHours.style.transform = `translateY(0px)`;
  tensPlaceHours.style.transform = `translateY(0px)`;
}

document
  .getElementById("button-start")
  .addEventListener("click", startStopwatch);
document.getElementById("button-stop").addEventListener("click", stopStopwatch);
document
  .getElementById("button-reset")
  .addEventListener("click", resetStopwatch);
