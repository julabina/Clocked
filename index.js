const body = document.body;
console.log(body);

currentTime = new Date();
currentDay = currentTime.getDay();
currentMonth = currentTime.getMonth();
currentHour = currentTime.getHours();
currentMinutes = currentTime.getMinutes();

console.log(currentDay);

const random = (a) => {
  val = Math.ceil(Math.random() * a);
  return val;
};

const changeBackground = (a, url) => {
  return (a.style.backgroundImage = "url(" + url + ")");
};

changeBackground(body, "./autumn/3.jpg");
