const menuMobile = document.querySelector(".mainMenu-mobile");
const menuMobileBtn = document.querySelector("#menuMobileBtn");
const menuIndex = menuMobile.querySelectorAll("details");

const MENUMOBILE_WIDTH = menuMobile.offsetWidth;

let activeMenu = false;

function closeMobileMenu() {
  menuMobileBtn.classList.remove("menuMobileOn");

  menuMobile.style.right = `-${MENUMOBILE_WIDTH}px`;
  activeMenu = false;

  for (let i = 0; i < menuIndex.length; i++) {
    menuIndex[i].open = false;
  }
}

function openMobileMenu() {
  menuMobileBtn.classList.add("menuMobileOn");

  menuMobile.style.right = "0px";
  activeMenu = true;
}

function handleMobileBtn() {
  if (!activeMenu && !menuMobileBtn.classList.contains("menuMobileOn")) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
}

menuMobileBtn.addEventListener("click", handleMobileBtn);

// 화면 width가 1500 초과 시 모바일용 메뉴창 닫기
function hideMobileMenu() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1250) {
    closeMobileMenu();
  }
}

window.addEventListener("resize", hideMobileMenu);
window.addEventListener("scroll", closeMobileMenu);
