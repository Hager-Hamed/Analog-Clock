//#region Analog Clock
// Caching the needed Dom Elements
const hourHand = document.querySelector(".hour");
const minsHand = document.querySelector(".min");
const secsHand = document.querySelector(".sec");

function calcTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const mins = currentDate.getMinutes();
  const secs = currentDate.getSeconds();

  displaytime(hours, mins, secs);
}

function displaytime(hours, mins, secs) {
  const hoursMode12 = hours > 12 ? hours - 12 : hours;

  const hoursDegree = (360 / 12) * hoursMode12;
  const minsDegree = (360 / 60) * mins;
  // const hoursDegree = (360 / 12) * (hoursMode12 + mins / 60);
  // const minsDegree = (360 / 60) * (mins + secs / 60);
  const secDegree = (360 / 60) * secs;

  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  secsHand.style.transform = `rotate(${secDegree}deg)`;
}

window.setInterval(calcTime, 1000);

//#endregion

//#region   Auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll(".current-year");
const currentYear = new Date().getFullYear();

// auto update Current year functionality
currentYearElements.forEach((ele) => {
  ele.textContent = currentYear;
});
//#endregion
