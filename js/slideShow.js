const slides = document.querySelector(".showSlide");
const slide = document.querySelectorAll(".showSlide > li");
const slideCount = slide.length;
const prevBtn = document.querySelector(".showSlide_prev");
const nextBtn = document.querySelector(".showSlide_next");
const wrapper = document.querySelector(".showSlide_wrapper");

let currentIdx = 0;
let slideWidth = Number(window.getComputedStyle(slide[0]).width.replace("px", ""));
let slideMarginR = Number(window.getComputedStyle(slide[0]).marginRight.replace("px", ""));
let wrapWidth = Math.floor(window.getComputedStyle(wrapper).width.replace("px", ""));
let btnActive = false;

const inputDelay = 400;

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");

    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");

    slides.prepend(cloneSlide);
  }

  updateMargin();

  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
}

function updateWidth() {
  let currentSlide = document.querySelectorAll(".showSlide > li");
  let newSlideCount = currentSlide.length;

  let newWidth = (slideWidth + newMarginR * 2) * newSlideCount + "px";
  slides.style.width = newWidth;
}

function setInitialPos() {
  let initialTranslateValue = -(slideWidth + newMarginR * 2) * slideCount - newMarginR;
  slides.style.transform = "translateX(" + initialTranslateValue + "px)";
}

prevBtn.addEventListener("click", function () {
  if (btnActive == false) {
    moveSlide(currentIdx - 1);
    btnActive = true;
    userActive = true;
    setTimeout(function () {
      btnActive = false;
    }, inputDelay);
  }
});

nextBtn.addEventListener("click", function () {
  if (btnActive == false) {
    moveSlide(currentIdx + 1);
    btnActive = true;
    userActive = true;
    setTimeout(function () {
      btnActive = false;
    }, inputDelay);
  }
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + newMarginR * 2) + "px";
  currentIdx = num;

  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 350);

    setTimeout(function () {
      slides.classList.add("animated");
    }, 400);
  }
}

window.onresize = function () {
  wrapWidth = Math.floor(window.getComputedStyle(wrapper).width.replace("px", ""));
  updateMargin();
};

function updateMargin() {
  let trucSlideCount = Math.trunc(wrapWidth / slideWidth);
  let newSlides = document.querySelectorAll(".showSlide > li");
  let newSlideCount = newSlides.length;
  newMarginR = (wrapWidth - slideWidth * trucSlideCount) / (2 * trucSlideCount - 2);

  for (let i = 0; i < newSlideCount; i++) {
    newSlides[i].style.margin = "0 " + newMarginR + "px";
  }

  updateWidth();
  setInitialPos();
  slides.style.left = -currentIdx * (slideWidth + newMarginR * 2) + "px";
}

function autoSlide() {
  setInterval(() => nextBtn.click(), 3000);
}

makeClone();
autoSlide();
