const display = document.getElementById("display");
let startTime = 0;
let interval = null;

function formatTime(ms) {
  const h = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const msStr = String(ms % 1000).padStart(3, "0");
  return `${h}:${m}:${s}.${msStr}`;
}

function startStopwatch() {
  if (interval) return; // чтобы не создавать лишние setInterval

  const offset = Date.now() - startTime;
  startTime = Date.now() - offset;

  interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    display.textContent = formatTime(elapsed);
  }, 10);
}

function stopStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  clearInterval(interval);
  interval = null;
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
