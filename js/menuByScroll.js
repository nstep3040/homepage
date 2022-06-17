const topMenu = document.getElementById("header");

let last_y = 0;

function hideTopMenu() {
  topMenu.classList.add("scrolling");
}

function showTopMenu() {
  topMenu.classList.remove("scrolling");
}

function scrolledWindow() {
  let current_y = window.scrollY;

  if (window.scrollY > 60) {
    if (last_y > current_y) {
      showTopMenu();
      last_y = current_y;
    } else if (last_y < current_y) {
      hideTopMenu();
      last_y = current_y;
    }
  }
}

window.addEventListener("scroll", scrolledWindow);
