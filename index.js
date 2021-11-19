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

let rand10 = random(10);

if (currentMonth === 0) {
  urll = "./winter/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 1) {
  urll = "./winter/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 2) {
  if (currentDate > 20) {
    urll = "./spring/" + rand10 + ".jpg";
    changeBackground(urll);
  } else {
    urll = "./winter/" + rand10 + ".jpg";
    changeBackground(urll);
  }
} else if (currentMonth === 3) {
  urll = "./spring/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 4) {
  urll = "./spring/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 5) {
  if (currentDate > 20) {
    urll = "./summer/" + rand10 + ".jpg";
    changeBackground(urll);
  } else {
    urll = "./spring/" + rand10 + ".jpg";
    changeBackground(urll);
  }
} else if (currentMonth === 6) {
  urll = "./summer/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 7) {
  urll = "./summer/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 8) {
  if (currentDate > 20) {
    urll = "./autumn/" + rand10 + ".jpg";
    changeBackground(urll);
  } else {
    urll = "./summer/" + rand10 + ".jpg";
    changeBackground(urll);
  }
} else if (currentMonth === 9) {
  urll = "./autumn/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 10) {
  urll = "./autumn/" + rand10 + ".jpg";
  changeBackground(urll);
} else if (currentMonth === 11) {
  if (currentDate > 20) {
    urll = "./winter/" + rand10 + ".jpg";
    changeBackground(urll);
  } else {
    urll = "./autumn/" + rand10 + ".jpg";
    changeBackground(urll);
  }
}
