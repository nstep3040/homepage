const menuMoile = document.querySelector(".mainMenu-mobile");
const menuMoileBtn = document.querySelector("#menuMobileBtn");
const menuIndex = menuMoile.querySelectorAll("details");

const MENUMOBILE_WIDTH = menuMoile.offsetWidth;

let activeMenu = false;

function closeMobileMenu() {
  menuMoile.style.right = `-${MENUMOBILE_WIDTH}px`;
  activeMenu = false;

  for (let i = 0; i < menuIndex.length; i++) {
    menuIndex[i].open = false;
  }
}

function openMobileMenu() {
  menuMoile.style.right = "0px";
  activeMenu = true;
}

function handleMobileBtn() {
  if (activeMenu) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

menuMoileBtn.addEventListener("click", handleMobileBtn);

// 화면 width가 1500 초과 시 모바일용 메뉴창 닫기
function hideMobileMenu() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1500) {
    closeMobileMenu();
  }
}

window.addEventListener("resize", hideMobileMenu);
