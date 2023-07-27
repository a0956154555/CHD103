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
