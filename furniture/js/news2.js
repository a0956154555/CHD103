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
let card1 = document.getElementsByClassName(".card1");
let card2 = document.getElementsByClassName(".card2");
let firstFloor = document.getElementsByClassName(".first-floor");

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
    console.log("===over", i);
  });
  firstFloor[i].addEventListener("mouseout", function () {
    card1[i].style.rotate = "45deg";
    card2[i].style.rotate = "-45deg";
    console.log("===over", i);
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

let newsPostCard = document.querySelector(".news-post-card");
let divv;
let txtPointArr = [
  "",
  "",
  "",
  "【慈善捐款】嬰兒之家 x 暉楽家居",
  "【國外參展】德國科隆展",
  "【法國參展】暉楽造訪高第",
  "【新品入駐】 沈醉在英國浪漫優雅的設計",
  "【春宴綻藝】米其林餐酒會",
  "【品牌學習】手工實木,曲線的雕刻者：Artisan",
  "【國外參訪】2022米蘭設計家具展",
  "【廠商來訪】開幸福的宅第:法國台北",
  "【廠商來訪】 中華民國室內設計裝修全國聯合會參訪暉楽家居代表圖",
];
let dateArr = [
  "",
  "",
  "",
  "2023.07.01",
  "2023.06.25",
  "2023.05.18",
  "2023.04.28",
  "2023.03.18",
  "2023.01.12",
  "2022.12.20",
  "2022.11.28",
  "2022.11.08",
];
let divvArr = [];
for (let i = 3; i <= 11; i++) {
  let divv = document.createElement("div");
  divv.classList.add("first-floor");
  divv.innerHTML = `
    <div class="top-img">
      <img src="../../news2-img/${i}.jpg" alt="" />
    </div>
    <div class="txt-point">
      ${txtPointArr[i]}
    </div>
    <div class="date">
      <div>${dateArr[i]}</div>
      <div>
        <span class="date-span card1"></span>
        <span class="date-span card2"></span>
      </div>
    </div>
  `;
  // divv.addEventListener("mouseover", function () {
  //   card1.style.rotate = "90deg";
  //   card2.style.rotate = "-180deg";
  // });
  // divv.addEventListener("mouseout", function () {
  //   card1.style.rotate = "45deg";
  //   card2.style.rotate = "-45deg";
  // });
  divv.addEventListener("mouseover", function () {
    let card1 = this.querySelector(".card1");
    let card2 = this.querySelector(".card2");
    card1.style.rotate = "90deg";
    card2.style.rotate = "-180deg";
  });

  divv.addEventListener("mouseout", function () {
    let card1 = this.querySelector(".card1");
    let card2 = this.querySelector(".card2");
    card1.style.rotate = "45deg";
    card2.style.rotate = "-45deg";
  });
  newsPostCard.appendChild(divv);
}
