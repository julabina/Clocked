const body = document.body;
let urll;

currentTime = new Date();
currentDay = currentTime.getDay();
currentMonth = currentTime.getMonth();
currentHour = currentTime.getHours();
currentMinutes = currentTime.getMinutes();
currentDate = currentTime.getDate();

function random(a) {
  val = Math.ceil(Math.random() * a);
  return val;
}

const changeBackground = (url) => {
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";

  return (body.style.backgroundImage = "url(" + url + ")");
};

if (currentMonth === 0) {
} else if (currentMonth === 1) {
} else if (currentMonth === 2) {
  if (currentDate > 20) {
  } else {
  }
} else if (currentMonth === 3) {
} else if (currentMonth === 4) {
} else if (currentMonth === 5) {
  if (currentDate > 20) {
  } else {
  }
} else if (currentMonth === 6) {
} else if (currentMonth === 7) {
} else if (currentMonth === 8) {
  if (currentDate > 20) {
  } else {
  }
} else if (currentMonth === 9) {
} else if (currentMonth === 10) {
  console.log("test");
  b = random(10);
  console.log(b);
  urll = "./autumn/" + b + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 11) {
  if (currentDate > 20) {
  } else {
  }
}
