const display = document.getElementById("display");
let startTime, interval;

function formatTime(ms) {
  const date = new Date(ms);
  const h = String(date.getUTCHours()).padStart(2, "0");
  const m = String(date.getUTCMinutes()).padStart(2, "0");
  const s = String(date.getUTCSeconds()).padStart(2, "0");
  const msStr = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${h}:${m}:${s}.${msStr}`;
}

function startStopwatch() {
  const offset = Date.now() - (startTime || 0);
  startTime = Date.now() - offset;

  interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    display.textContent = formatTime(elapsed);
  }, 10);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  startTime = 0;
  display.textContent = "00:00:00.000";
}

document
  .getElementById("button-start")
  .addEventListener("click", startStopwatch);
document.getElementById("button-stop").addEventListener("click", stopStopwatch);
document
  .getElementById("button-reset")
  .addEventListener("click", resetStopwatch);
