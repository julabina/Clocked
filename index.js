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
      urll = "./assets/winter/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 1) {
    if (currentDate > 28) {
      daySelect.value = 28;
      urll = "./assets/winter/" + rand10 + ".webp";
      changeBackground(urll);
    } else {
      urll = "./assets/winter/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 2) {
    if (currentDate > 20) {
      urll = "./assets/spring/" + rand10 + ".webp";
      changeBackground(urll);
    } else {
      urll = "./assets/winter/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 3) {
    if (currentDate === 31) {
      daySelect.value = 30;
      urll = "./assets/spring/" + rand10 + ".webp";
      changeBackground(urll);
    } else {
      urll = "./assets/spring/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 4) {
    urll = "./assets/spring/" + rand10 + ".webp";
    changeBackground(urll);
  } else if (currentMonth === 5) {
    if (currentDate > 20) {
      if (currentDate === 31) {
        daySelect.value = 30;
        urll = "./assets/summer/" + rand10 + ".webp";
        changeBackground(urll);
      } else {
        urll = "./assets/summer/" + rand10 + ".webp";
        changeBackground(urll);
      }
    } else {
      urll = "./assets/spring/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 6) {
    urll = "./assets/summer/" + rand10 + ".webp";
    changeBackground(urll);
  } else if (currentMonth === 7) {
    urll = "./assets/summer/" + rand10 + ".webp";
    changeBackground(urll);
  } else if (currentMonth === 8) {
    if (currentDate > 20) {
      if (currentDate === 31) {
        daySelect.value = 30;
        urll = "./assets/autumn/" + rand10 + ".webp";
        changeBackground(urll);
      } else {
        urll = "./assets/autumn/" + rand10 + ".webp";
        changeBackground(urll);
      }
    } else {
      urll = "./assets/summer/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 9) {
    if (currentDate === 31) {
      let randSpecial = random(5);
      urll = "./assets/specialDay/halloween/" + randSpecial + ".webp";
      changeBackground(urll);
    } else {
      urll = "./assets/autumn/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 10) {
    if (currentDate === 31) {
      daySelect.value = 30;
      urll = "./assets/autumn/" + rand10 + ".webp";
      changeBackground(urll);
    } else {
      urll = "./assets/autumn/" + rand10 + ".webp";
      changeBackground(urll);
    }
  } else if (currentMonth === 11) {
    if (currentDate === 25) {
      let randSpecial = random(5);
      urll = "./assets/specialDay/christmas/" + randSpecial + ".webp";
      changeBackground(urll);
    } else if (currentDate > 20) {
      urll = "./assets/winter/" + rand10 + ".webp";
      changeBackground(urll);
    } else {
      urll = "./assets/autumn/" + rand10 + ".webp";
      changeBackground(urll);
    }
  }
};

choseImg();

const preloadImg = (url) => {
  const img = new Image();
  img.src = url;
  console.log("test");
  return img;
};

const preloadImages = (images) => {
  for (let i = 0; i < images.length; i++) {
    images[i] = preloadImg(images[i]);
  }
};

let linkImg = [
  "./assets/spring/1.webp",
  "./assets/spring/2.webp",
  "./assets/spring/3.webp",
  "./assets/spring/4.webp",
  "./assets/spring/5.webp",
  "./assets/spring/6.webp",
  "./assets/spring/7.webp",
  "./assets/spring/8.webp",
  "./assets/spring/9.webp",
  "./assets/spring/10.webp",
  "./assets/summer/1.webp",
  "./assets/summer/2.webp",
  "./assets/summer/3.webp",
  "./assets/summer/4.webp",
  "./assets/summer/5.webp",
  "./assets/summer/6.webp",
  "./assets/summer/7.webp",
  "./assets/summer/8.webp",
  "./assets/summer/9.webp",
  "./assets/summer/10.webp",
  "./assets/autumn/1.webp",
  "./assets/autumn/2.webp",
  "./assets/autumn/3.webp",
  "./assets/autumn/4.webp",
  "./assets/autumn/5.webp",
  "./assets/autumn/6.webp",
  "./assets/autumn/7.webp",
  "./assets/autumn/8.webp",
  "./assets/autumn/9.webp",
  "./assets/autumn/10.webp",
  "./assets/winter/1.webp",
  "./assets/winter/2.webp",
  "./assets/winter/3.webp",
  "./assets/winter/4.webp",
  "./assets/winter/5.webp",
  "./assets/winter/6.webp",
  "./assets/winter/7.webp",
  "./assets/winter/8.webp",
  "./assets/winter/9.webp",
  "./assets/winter/10.webp",
  "./assets/specialDay/christmas/1.webp",
  "./assets/specialDay/christmas/2.webp",
  "./assets/specialDay/christmas/3.webp",
  "./assets/specialDay/christmas/4.webp",
  "./assets/specialDay/christmas/5.webp",
  "./assets/specialDay/halloween/1.webp",
  "./assets/specialDay/halloween/2.webp",
  "./assets/specialDay/halloween/3.webp",
  "./assets/specialDay/halloween/4.webp",
  "./assets/specialDay/halloween/5.webp",
  "./assets/specialDay/newYear/1.webp",
  "./assets/specialDay/newYear/2.webp",
  "./assets/specialDay/newYear/3.webp",
  "./assets/specialDay/newYear/4.webp",
  "./assets/specialDay/newYear/5.webp",
];

preloadImages(linkImg);

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
