const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".burger_menu").click(function (event) {
    $(
      ".burger_menu,.header,.nav,.nav_item_ul,.nav_item1,.nav_item2,body,.nav_item_text,.nav_item"
    ).toggleClass("change");
  });
});
