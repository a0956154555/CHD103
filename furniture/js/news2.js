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
