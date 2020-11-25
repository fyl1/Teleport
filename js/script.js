var senseList = document.querySelector(".sense__list");
var msnry = new Masonry(senseList, {
  // options
  itemSelector: ".sense-card",
  columnWidth: ".sense-card__width",
  percentPosition: true,
  gutter: 20,
});
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
const menuToggle = document.querySelector("#menu__toggle");
const headerInner = document.querySelector(".header__inner");
const headerLogo = document.querySelector(".header__logo");
const headerBtn = document.querySelector(".header-btn");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    headerLogo.classList.add("active-logo");
    headerInner.classList.add("center");
    headerBtn.classList.add("hidden");
  } else {
    headerLogo.classList.remove("active-logo");
    headerInner.classList.remove("center");
    headerBtn.classList.remove("hidden");
  }
});
