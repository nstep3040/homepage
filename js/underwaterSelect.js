const lnbMenu = document.querySelectorAll(".lnb__menu > ul")[2];
const connectorMenu = lnbMenu.querySelectorAll("li")[0];
const connector = document.getElementById("underwater__connector");
const sonarMenu = lnbMenu.querySelectorAll("li")[1];
const sonar = document.getElementById("underwater__sonar");
const rovMenu = lnbMenu.querySelectorAll("li")[2];
const rov = document.getElementById("underwater__rov");

function closeDetails() {
  connector.open = false;
  sonar.open = false;
  rov.open = false;
}

function scrollConn() {
  closeDetails();
  connector.open = true;
}

function scrollSonar() {
  closeDetails();
  sonar.open = true;
}

function scrollRov() {
  closeDetails();
  rov.open = true;
}

connectorMenu.addEventListener("click", scrollConn);
sonarMenu.addEventListener("click", scrollSonar);
rovMenu.addEventListener("click", scrollRov);
