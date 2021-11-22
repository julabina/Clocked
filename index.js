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
  "./assets/spring/1.jpg",
  "./assets/spring/2.jpg",
  "./assets/spring/3.jpg",
  "./assets/spring/4.jpg",
  "./assets/spring/5.jpg",
  "./assets/spring/6.jpg",
  "./assets/spring/7.jpg",
  "./assets/spring/8.jpg",
  "./assets/spring/9.jpg",
  "./assets/spring/10.jpg",
  "./assets/summer/1.jpg",
  "./assets/summer/2.jpg",
  "./assets/summer/3.jpg",
  "./assets/summer/4.jpg",
  "./assets/summer/5.jpg",
  "./assets/summer/6.jpg",
  "./assets/summer/7.jpg",
  "./assets/summer/8.jpg",
  "./assets/summer/9.jpg",
  "./assets/summer/10.jpg",
  "./assets/autumn/1.jpg",
  "./assets/autumn/2.jpg",
  "./assets/autumn/3.jpg",
  "./assets/autumn/4.jpg",
  "./assets/autumn/5.jpg",
  "./assets/autumn/6.jpg",
  "./assets/autumn/7.jpg",
  "./assets/autumn/8.jpg",
  "./assets/autumn/9.jpg",
  "./assets/autumn/10.jpg",
  "./assets/winter/1.jpg",
  "./assets/winter/2.jpg",
  "./assets/winter/3.jpg",
  "./assets/winter/4.jpg",
  "./assets/winter/5.jpg",
  "./assets/winter/6.jpg",
  "./assets/winter/7.jpg",
  "./assets/winter/8.jpg",
  "./assets/winter/9.jpg",
  "./assets/winter/10.jpg",
  "./assets/specialDay/christmas/1.jpg",
  "./assets/specialDay/christmas/2.jpg",
  "./assets/specialDay/christmas/3.jpg",
  "./assets/specialDay/christmas/4.jpg",
  "./assets/specialDay/christmas/5.jpg",
  "./assets/specialDay/halloween/1.jpg",
  "./assets/specialDay/halloween/2.jpg",
  "./assets/specialDay/halloween/3.jpg",
  "./assets/specialDay/halloween/4.jpg",
  "./assets/specialDay/halloween/5.jpg",
  "./assets/specialDay/newYear/1.jpg",
  "./assets/specialDay/newYear/2.jpg",
  "./assets/specialDay/newYear/3.jpg",
  "./assets/specialDay/newYear/4.jpg",
  "./assets/specialDay/newYear/5.jpg",
];

preloadImages(linkImg);

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
