var senseList = document.querySelector(".sense__list");
var msnry = new Masonry(senseList, {
  // options
  itemSelector: ".sense-card",
  columnWidth: ".sense-card__width",
  percentPosition: true,
  gutter: 20,
});
