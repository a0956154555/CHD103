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
// window.addEventListener("scroll", function () {
//   let currentScrollPosition = document.documentElement.scrollTop;

//   if (currentScrollPosition > lastScrollPosition) {
//     newsTitle.style.opacity = "0";
//     setTimeout(() => {
//       newsTitle.style.opacity = "1";
//     }, 1000);
//     newsTitle.style.backgroundImage = "url(../../news2-img/2.jpg)";
//   } else {
//     newsTitle.style.opacity = "0";
//     setTimeout(() => {
//       newsTitle.style.opacity = "1";
//     }, 1000);
//     newsTitle.style.backgroundImage = "url(../../news2-img/1.jpg)";
//   }

//   lastScrollPosition = currentScrollPosition;
// });
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
// pageBtn.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

let newsPostCard = document.querySelector(".news-post-card");
let divv;
let txtPointArr = [
  "【廠商來訪】夢想時分:瓦爾喬麗",
  "【慈善捐款】嬰兒之家 x 暉楽家居",
  "【國外參展】德國科隆展",
  "【法國參展】暉楽造訪高第",
  "【新品入駐】 沈醉在英國浪漫優雅的設計",
  "【春宴綻藝】米其林餐酒會",
  "【品牌學習】手工實木,曲線的雕刻者：Artisan",
  "【國外參訪】2022米蘭設計家具展",
  "【廠商來訪】開幸福的宅第:法國台北",
  "【廠商來訪】 中華民國室內設計裝修全國聯合會參訪暉楽家居代表圖",
  "【廠商來訪】世界級的盛宴:馬爾地夫",
];
let dateArr = [
  "2023.07.01",
  "2023.06.25",
  "2023.05.18",
  "2023.04.28",
  "2023.03.18",
  "2023.01.12",
  "2022.12.20",
  "2022.11.28",
  "2022.11.08",
  "2022.06.18",
];
let newsDataArr = [
  ["../../news2-img/photo1.jpg", "【廠商來訪】夢想時分:瓦爾喬麗", "2023.07.01"],
  [
    "../../news2-img/photo2.jpg",
    "【慈善捐款】嬰兒之家 x 暉楽家居",
    "2023.06.25",
  ],
  ["../../news2-img/photo3.jpg", "【國外參展】德國科隆展", "2023.05.18"],
  ["../../news2-img/photo4.jpg", "【法國參展】暉楽造訪高第", "2023.04.28"],
  [
    "../../news2-img/photo5.jpg",
    "【新品入駐】 沈醉在英國浪漫優雅的設計",
    "2023.03.18",
  ],
  ["../../news2-img/photo6.jpg", "【春宴綻藝】米其林餐酒會", "2023.01.12"],
  [
    "../../news2-img/photo7.jpg",
    "【品牌學習】手工實木,曲線的雕刻者：Artisan",
    "2022.12.20",
  ],
  [
    "../../news2-img/photo8.jpg",
    "【國外參訪】2022米蘭設計家具展",
    "2022.11.28",
  ],
  [
    "../../news2-img/photo9.jpg",
    "【廠商來訪】 中華民國室內設計裝修全國聯合會參訪暉楽家居代表圖",
    "2022.06.18",
  ],
];
// let minn = dateArr[3].slice(0, 4);
// console.log(minn);

// for (let i = 0; i < dateArr.length; i++) {
//   for (let j = i + 1; j < dateArr.length; j++) {
//     let temp = "";
//     if (parseInt(dateArr[i].slice(0, 4)) > parseInt(dateArr[j].slice(0, 4))) {
//       temp = dateArr[j];
//       dateArr[j] = dateArr[i];
//       dateArr[i] = temp;
//     }
//   }
//   for (let j = i + 1; j < dateArr.length; j++) {
//     let temp = "";
//     if (parseInt(dateArr[i].slice(-3)) > parseInt(dateArr[j].slice(-3))) {
//       temp = dateArr[j];
//       dateArr[j] = dateArr[i];
//       dateArr[i] = temp;
//     }
//   }
// }
for (let i = 0; i < newsDataArr.length; i++) {
  for (let j = i + 1; j < newsDataArr.length; j++) {
    if (
      parseInt(dateArr[2][i].slice(0, 4)) > parseInt(dateArr[2][j].slice(0, 4))
    ) {
      let temp = dateArr[2][j];
      dateArr[2][j] = dateArr[2][i];
      dateArr[2][i] = temp;
    } else if (
      parseInt(dateArr[2][i].slice(0, 4)) ===
      parseInt(dateArr[2][j].slice(0, 4))
    ) {
      if (
        parseInt(dateArr[2][i].slice(5, 7)) >
        parseInt(dateArr[2][j].slice(5, 7))
      ) {
        let temp = dateArr[2][j];
        dateArr[2][j] = dateArr[2][i];
        dateArr[2][i] = temp;
      } else if (
        parseInt(dateArr[2][i].slice(5, 7)) ===
        parseInt(dateArr[2][j].slice(5, 7))
      ) {
        if (
          parseInt(dateArr[2][i].slice(-2)) > parseInt(dateArr[2][j].slice(-2))
        ) {
          let temp = dateArr[2][j];
          dateArr[2][j] = dateArr[2][i];
          dateArr[2][i] = temp;
        }
      }
    }
  }
}

let pageBtnBool = false;

pageBtn.addEventListener("click", function () {
  pageBtnBool = !pageBtnBool;
  if (pageBtnBool) {
    newsDataArr.sort((a, b) => a[2].localeCompare(b[2]));
  } else {
    newsDataArr.sort((a, b) => b[2].localeCompare(a[2]));
  }

  newsPostCard.innerHTML = "";

  for (let i = 0; i < newsDataArr.length; i++) {
    let divv = document.createElement("div");
    divv.classList.add("first-floor");
    divv.innerHTML = `
      <div class="top-img">
        <img src="${newsDataArr[i][0]}" alt="" />
      </div>
      <div class="txt-point">
        ${newsDataArr[i][1]}
      </div>
      <div class="date">
        <div>${newsDataArr[i][2]}</div>
        <div>
          <span class="date-span card1"></span>
          <span class="date-span card2"></span>
        </div>
      </div>
    `;
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
});

// ...後續的程式碼...

for (let i = 1; i <= 9; i++) {
  let divv = document.createElement("div");
  divv.classList.add("first-floor");
  divv.innerHTML = `
    <div class="top-img">
      <img src="../../news2-img/photo${i}.jpg" alt="" />
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
// ----------------------------------
