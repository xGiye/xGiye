const currentUTCTime = document.getElementById("currentUTCTime");
const currentDayOfTheWeek = document.getElementById("currentDayOfTheWeek");

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  let dateTime = new Date();
  currentUTCTime.textContent = dateTime.getTime();
  currentDayOfTheWeek.textContent = daysOfTheWeek[dateTime.getDay()];
}, 1000);
