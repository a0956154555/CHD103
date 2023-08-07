let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  // alert(underCaseTrueOrFalse);
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
// -------------------------------手機板
let headerMiddle = document.querySelector(".header-middle");
let headerRight = document.querySelector(".header-right");
let menuTrue = false;
headerMiddle.addEventListener("click", function () {
  menuTrue = !menuTrue;
  if (menuTrue) {
    headerRight.style.display = "flex";
    headerRight.style.animation = "menuTranslate 1s forwards";
  } else {
    headerRight.style.display = "none";
  }
});

function isMobileDevice() {
  return window.matchMedia("(max-width: 450px)").matches;
}

let aboutBannerFirst = document.querySelector(".about-banner-first");
let humansArr = [
  "../../furniture_img/human1.jpg",
  "../../furniture_img/human2.jpg",
  "../../furniture_img/human3.jpg",
  "../../furniture_img/human4.jpg",
];
let humanNum = 1;
let aboutFstChild = document.querySelector(".about-banner:first-child");
let collapse = document.querySelector(".collapse");
let aboutUs = document.querySelector(".about-us");
let underBannerTxt = document.querySelector(".under-banner-txt");

window.addEventListener("load", function () {
  if (isMobileDevice()) {
    aboutFstChild.style.transition = "1s";
    setInterval(function () {
      aboutBannerFirst.style.backgroundImage = `url(${humansArr[humanNum]})`;
      humanNum++;
      if (humanNum >= 4) {
        humanNum = 0;
      }
    }, 3000);
  }
});

collapse.addEventListener("click", function () {
  collapse.style.width = "100%";
  setTimeout(() => {
    aboutFstChild.style.width = "0%";
  }, 100);
  setTimeout(() => {
    aboutUs.style.height = "0";
    aboutUs.style.transition = "1s";
  }, 1000);
  setTimeout(() => {
    underBannerTxt.style.padding = "450px 10px";
  }, 2000);
});

underBannerTxt.addEventListener("click", function () {
  underBannerTxt.style.padding = "50px 10px";
});
let underClose = document.querySelector(".under-close");
underClose.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
