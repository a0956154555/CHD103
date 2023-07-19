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

let newsTitle = document.querySelector(".news-title");
let newsTitleArr = [
  "N",
  "E",
  "V",
  '<span class="news-title-span">V</span>',
  "S",
];
let newsTitleNum = 0;
let newsTitleInterval = setInterval(() => {
  if (newsTitleNum < newsTitleArr.length) {
    newsTitle.innerHTML += newsTitleArr[newsTitleNum];
    newsTitleNum++;
  } else {
    clearInterval(newsTitleInterval);
  }
}, 300);
let newsTitleSpan = document.querySelector(".news-title-span");
let mainControlWidthTitle = document.querySelector(".main-control-width-title");

let lastScrollPosition = document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  let currentScrollPosition = document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    newsTitle.style.opacity = "0";
    setTimeout(() => {
      newsTitle.style.opacity = "1";
    }, 1000);
    newsTitle.style.backgroundImage = "url(../../news2-img/2.jpg)";
  } else {
    newsTitle.style.opacity = "0";
    setTimeout(() => {
      newsTitle.style.opacity = "1";
    }, 1000);
    newsTitle.style.backgroundImage = "url(../../news2-img/1.jpg)";
  }

  lastScrollPosition = currentScrollPosition;
});
// ----------------------------
let card1 = document.querySelectorAll(".card1");
let card2 = document.querySelectorAll(".card2");
let firstFloor = document.querySelectorAll(".first-floor");

// firstFloor.addEventListener("mouseover", function () {
//   card1.style.rotate = "90deg";
//   card2.style.rotate = "-180deg";
// });
// firstFloor.addEventListener("mouseover", function () {});
// for (let j of firstFloor) {
//   j.addEventListener("mouseover", function () {
//     for (let i of card1) {
//       i.style.rotate = "90deg";
//     }
//     for (let i of card2) {
//       i.style.rotate = "-180deg";
//     }
//   });
// }
for (let i = 0; i < firstFloor.length; i++) {
  firstFloor[i].addEventListener("mouseover", function () {
    card1[i].style.rotate = "90deg";
    card2[i].style.rotate = "-180deg";
  });
  firstFloor[i].addEventListener("mouseout", function () {
    card1[i].style.rotate = "45deg";
    card2[i].style.rotate = "-45deg";
  });
}
// ----------------------------
let pageBtn = document.querySelector(".pageBtn");
pageBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
