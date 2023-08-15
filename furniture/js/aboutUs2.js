let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
let aboutUs = document.querySelector(".about-us");
let aboutUsArr = ["A", "b", "o", "u", "t", "U", "s"];
let heartPic = document.querySelector(".heart-pic");
let sectionIntroduce = document.querySelector(".section-introduce");
let currentIndex = 0;
let heartMove = document.querySelectorAll(".heart-move");
let huSlogon = document.querySelector(".hu-slogon");

let heartArr = [
  "../../furniture_img/H01.svg",
  "../../furniture_img/H02.svg",
  "../../furniture_img/H03.svg",
];
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});

window.addEventListener("load", function () {
  let aboutUsArr = ["下", "午", "三", "點", "星", "聚", "點", "見"];
  let i = 0;
  const typingInterval = setInterval(function () {
    if (i < aboutUsArr.length) {
      aboutUs.innerHTML += aboutUsArr[i];
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(function () {
        let j = aboutUsArr.length - 1;
        const backspaceInterval = setInterval(function () {
          if (j >= 0) {
            aboutUs.innerHTML = aboutUs.innerHTML.slice(0, -1);
            j--;
          } else {
            clearInterval(backspaceInterval);
            const fullText = "About Us";
            let k = 0;
            const typeFullTextInterval = setInterval(function () {
              if (k < fullText.length) {
                aboutUs.innerHTML += fullText[k];
                k++;
              } else {
                clearInterval(typeFullTextInterval);
              }
            }, 200);
          }
        }, 200);
      }, 1000);
    }
  }, 200);
});

// window.addEventListener("load", function () {
//   heartPic.src = heartArr[currentIndex];

//   setInterval(() => {
//     heartPic.src = heartArr[0];
//     currentIndex++;
//     if (currentIndex > heartArr.length) {
//       currentIndex = 0;
//     }
//     heartPic.src = heartArr[currentIndex];
//   }, 1000);
// });
huSlogon.addEventListener("mouseover", function () {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex > 0) {
      heartMove[currentIndex - 1].style.opacity = "0";
    }
    heartMove[currentIndex].style.opacity = "0";
    currentIndex++;

    if (currentIndex >= heartMove.length) {
      clearInterval(interval); // 清除定时器
    }
  }, 500);
});
huSlogon.addEventListener("mouseout", function () {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex > 0) {
      heartMove[currentIndex - 1].style.opacity = "1";
    }
    heartMove[currentIndex].style.opacity = "1";
    currentIndex++;

    if (currentIndex >= heartMove.length) {
      clearInterval(interval); // 清除定时器
    }
  }, 500);
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

let underClose = document.querySelector(".under-close");

underClose.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
