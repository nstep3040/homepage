const selectBtns = document.querySelectorAll(".underwaterBtns button");
const telePost = document.querySelector(".teleConWrap");
const sonarPost = document.querySelector(".sonarWrap");
const rovPost = document.querySelector(".rovWrap");

const HIDDEN_CLASS = "hidden";

function hiddenPost() {
  telePost.classList.add(HIDDEN_CLASS);
  sonarPost.classList.add(HIDDEN_CLASS);
  rovPost.classList.add(HIDDEN_CLASS);
}

function showPost(event) {
  hiddenPost();
  switch (event.path[0]) {
    case selectBtns[0]:
      telePost.classList.remove(HIDDEN_CLASS);
      break;
    case selectBtns[1]:
      sonarPost.classList.remove(HIDDEN_CLASS);
      break;
    case selectBtns[2]:
      rovPost.classList.remove(HIDDEN_CLASS);
  }
}

function disableBtns() {
  selectBtns.forEach((element) => {
    element.classList.remove("active");
  });
}

function handleBtns(event) {
  disableBtns();
  showPost(event);
  event.path[0].classList.add("active");
}

selectBtns.forEach((element) => {
  element.addEventListener("click", handleBtns);
});
