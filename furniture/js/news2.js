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
