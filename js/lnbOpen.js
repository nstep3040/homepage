const tabRfid = document.querySelector("#lnb__menuBtn01");
const tabMag = document.querySelector("#lnb__menuBtn02");
const tabUnderwater = document.querySelector("#lnb__menuBtn03");

console.dir(tabRfid);
console.log(tabMag);
console.log(tabUnderwater);

function checkPage() {
  const currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1, window.location.pathname.length);

  switch (currentPage) {
    case "sub_02_Industry_03.html":
      tabRfid.checked = true;
      break;

    case "sub_02_Industry_02.html":
      tabMag.checked = true;
      break;

    case "sub_02_Industry_01.html":
      tabUnderwater.checked = true;
      break;

    default:
      break;
  }
  console.log(currentPage);
  console.log(currentPage.includes("Industry_02"));
}

window.addEventListener("load", checkPage);
