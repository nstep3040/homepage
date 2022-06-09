const content = document.querySelector(".contentsWrap");
const mobileMenu = document.querySelector(".mainMenu-mobile");

// content details control
function detailsClose(event) {
  toggled = event.target;
  if (toggled.attributes.open) {
    content.querySelectorAll("details[open]").forEach((opened) => {
      if (toggled != opened) {
        opened.removeAttribute("open");
      }
    });
  }
}

function findDetails() {
  content.querySelectorAll("details").forEach((element) => {
    element.addEventListener("toggle", detailsClose);
  });
}

window.addEventListener("DOMContentLoaded", findDetails);

// mobile menu details control
function detailsCloseMobile(event) {
  toggled = event.target;
  if (toggled.attributes.open) {
    mobileMenu.querySelectorAll("details[open]").forEach((opened) => {
      if (toggled != opened) {
        opened.removeAttribute("open");
      }
    });
  }
}

function findDetailsMobile() {
  mobileMenu.querySelectorAll("details").forEach((element) => {
    element.addEventListener("toggle", detailsCloseMobile);
  });
}

window.addEventListener("DOMContentLoaded", findDetailsMobile);
