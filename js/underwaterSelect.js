const connector = document.getElementById("underwater__connector");
const sonar = document.getElementById("underwater__sonar");
const rov = document.getElementById("underwater__rov");

function openConn() {
  if (!connector.open) {
    connector.open = true;
  }
}

function openSonar() {
  if (!sonar.open) {
    sonar.open = true;
  }
}

function openRov() {
  if (!rov.open) {
    rov.open = true;
  }
}
