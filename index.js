const menuBtn = document.getElementById("menuBtn");
const menuContainer = document.querySelector(".menuContainer");
const currentBtn = document.getElementById("currentBtn");
const daySelect = document.getElementById("dayS");
const monthSelect = document.getElementById("monthS");
const body = document.body;
let urll;

let currentTime = new Date();
let currentMonth = currentTime.getMonth();
let currentDate = currentTime.getDate();

daySelect.value = currentDate;
monthSelect.value = currentMonth;

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

const choseImg = () => {
  let rand10 = random(10);
  if (currentMonth === 0) {
    if (currentDate === 1) {
      let randSpecial = random(5);
      urll = "./assets/specialDay/newYear/" + randSpecial + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/winter/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 1) {
    if (currentDate > 28) {
      daySelect.value = 28;
      urll = "./assets/winter/" + rand10 + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/winter/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 2) {
    if (currentDate > 20) {
      urll = "./assets/spring/" + rand10 + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/winter/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 3) {
    if (currentDate === 31) {
      daySelect.value = 30;
      urll = "./assets/spring/" + rand10 + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/spring/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 4) {
    urll = "./assets/spring/" + rand10 + ".jpg";
    changeBackground(urll);
  } else if (currentMonth === 5) {
    if (currentDate > 20) {
      if (currentDate === 31) {
        daySelect.value = 30;
        urll = "./assets/summer/" + rand10 + ".jpg";
        changeBackground(urll);
      } else {
        urll = "./assets/summer/" + rand10 + ".jpg";
        changeBackground(urll);
      }
    } else {
      urll = "./assets/spring/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 6) {
    urll = "./assets/summer/" + rand10 + ".jpg";
    changeBackground(urll);
  } else if (currentMonth === 7) {
    urll = "./assets/summer/" + rand10 + ".jpg";
    changeBackground(urll);
  } else if (currentMonth === 8) {
    if (currentDate > 20) {
      if (currentDate === 31) {
        daySelect.value = 30;
        urll = "./assets/autumn/" + rand10 + ".jpg";
        changeBackground(urll);
      } else {
        urll = "./assets/autumn/" + rand10 + ".jpg";
        changeBackground(urll);
      }
    } else {
      urll = "./assets/summer/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 9) {
    if (currentDate === 31) {
      let randSpecial = random(5);
      urll = "./assets/specialDay/halloween/" + randSpecial + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/autumn/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 10) {
    if (currentDate === 31) {
      daySelect.value = 30;
      urll = "./assets/autumn/" + rand10 + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/autumn/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  } else if (currentMonth === 11) {
    if (currentDate === 25) {
      let randSpecial = random(5);
      urll = "./assets/specialDay/christmas/" + randSpecial + ".jpg";
      changeBackground(urll);
    } else if (currentDate > 20) {
      urll = "./assets/winter/" + rand10 + ".jpg";
      changeBackground(urll);
    } else {
      urll = "./assets/autumn/" + rand10 + ".jpg";
      changeBackground(urll);
    }
  }
};

choseImg();

menuBtn.addEventListener("click", () => {
  if (menuContainer.classList.contains("invisible")) {
    menuContainer.classList.remove("invisible");
  } else {
    menuContainer.classList.add("invisible");
  }
});

currentBtn.addEventListener("click", () => {
  currentDate = currentTime.getDate();
  currentMonth = currentTime.getMonth();
  choseImg();
  daySelect.value = currentDate;
  monthSelect.value = currentMonth;
});

daySelect.addEventListener("change", () => {
  currentDate = parseInt(daySelect.value);
  choseImg();
});

monthSelect.addEventListener("change", () => {
  currentMonth = parseInt(monthSelect.value);
  choseImg();
});
