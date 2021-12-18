const SLIDES = $(".slides");
const THUMBNAILS = $(".slide_selector");
function nextSlide() {
  let nextNum = SLIDES.index($(".slides:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slides:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentThumbnail = THUMBNAILS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");

  THUMBNAILS.removeClass("selected");
  currentThumbnail.addClass("selected");
}

$("#right").click(function() {
  nextSlide();
});

$("#left").click(function() {
  prevSlide();
});

$("#slide_selector1").click(function() {
  showSlide(1);
});

$("#slide_selector2").click(function() {
  showSlide(2);
});

$("#slide_selector3").click(function() {
  showSlide(3);
});

$("#slide_selector4").click(function() {
  showSlide(4);
});

$(document).ready(function () {
    setInterval(function() {
        nextSlide();
}, 5000);
});
