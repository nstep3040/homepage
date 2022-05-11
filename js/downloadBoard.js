const buttons = document.querySelectorAll("#boardBtns button");
const boards = document.querySelectorAll("#boards tbody");

console.log(boards);

function hideBoards() {
  boards.forEach((element) => {
    element.classList.remove("boardShow");
    element.classList.add("hidden");
  });
}

function buttonOff() {
  buttons.forEach((element) => {
    element.classList.remove("boardSelect");
  });
}

function buttonSelect(event) {
  buttonOff();
  event.path[0].classList.add("boardSelect");
}

function showBoard(event) {
  boards[parseInt(event.path[0].id.slice(-1)) - 1].classList.remove("hidden");
  boards[parseInt(event.path[0].id.slice(-1)) - 1].classList.add("boardShow");
}

function handleBtn(event) {
  event.preventDefault();
  if (boards[event.path[0].id.slice(-1) - 1]) {
    hideBoards();
    showBoard(event);
    buttonSelect(event);
  }
}

buttons.forEach((element) => {
  element.addEventListener("click", handleBtn);
});
