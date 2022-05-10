const productList = document.querySelectorAll(".goud_Mag01 li");
const productLength = productList.length;
const dataSheetList = document.querySelectorAll(".dataSheet");
const body = document.querySelector("body");

const listHeight = Number(window.getComputedStyle(productList[0]).height.replace("px", ""));
let currentIdx = 0;

const ACTIVE_POP_CLASSNAME = "openPop";
const HIDDEN_INFO_CLASSNAME = "hidden";

// 데이터시트 창 모두 닫기
function closePopAll() {
  for (let i = 0; i < productLength; i++) {
    productList[i].classList.remove(ACTIVE_POP_CLASSNAME);
  }
  for (let i = 0; i < dataSheetList.length; i++) {
    dataSheetList[i].classList.add(HIDDEN_INFO_CLASSNAME);
  }
}

// 데이터 시트창 활성화 시 클릭 방지 창 활성화
function createClickBlock() {
  const clickBlock = document.createElement("div");

  clickBlock.setAttribute("class", "click-block");
  body.appendChild(clickBlock);
}

// 데이터시트 창 열기
function openPop() {
  const clickedProduct = this; // selected product list

  clickedProduct.classList.add(ACTIVE_POP_CLASSNAME);
  clickedProduct.nextElementSibling.classList.remove(HIDDEN_INFO_CLASSNAME);
  createClickBlock();
  currentList(clickedProduct);

  let offsetTop = clickedProduct.offsetTop;
  clickedProduct.nextElementSibling.style.top = offsetTop + listHeight + 20 + "px";
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}

function removeClickBlock() {
  const clickBlock = body.querySelector(".click-block");
  body.removeChild(clickBlock);
}

// input[type=radio] 생성 함수
function createInput(input, idNumber) {
  input.setAttribute("type", "radio");
  input.setAttribute("id", `tab${idNumber}`);
  input.setAttribute("class", "hidden");
  input.setAttribute("name", "tpgc");
}

// 이미지 개수에 따라서 컨트롤러 생성 함수
function createController(imgController, magImagesLength) {
  for (let i = 0; i < magImagesLength; i++) {
    const input = document.createElement("input");
    const num = String(i);
    const idNumber = num.padStart(2, "0");

    if (idNumber == "00") {
      createInput(input, idNumber);
      input.checked = true;
    } else {
      createInput(input, idNumber);
    }
    imgController.appendChild(input);

    const label = document.createElement("label");
    label.setAttribute("for", `tab${idNumber}`);
    label.innerText = "●";
    imgController.appendChild(label);
  }
}

// 창 닫을 때 컨트롤러 모두 삭제
function removeController() {
  for (let i = 0; i < productList.length; i++) {
    const list = productList[i];
    const activeDataSheet = list.nextElementSibling;
    const imgController = activeDataSheet.querySelector(".imgController");
    const controllerLength = imgController.children.length;

    if (controllerLength > 0) {
      for (let i = 0; i < controllerLength; i++) {
        imgController.removeChild(imgController.firstElementChild);
      }
    }
  }
  currentIdx = 0;
}

// 라디오 버튼 체크여부 확인 및 이미지 hidden 여부 변경
function checkedRadio(controllers, images) {
  for (let i = 0; i < controllers.length; i++) {
    const num = i;

    if (controllers[num].checked) {
      images[num].classList.remove("hidden");
    } else {
      images[num].classList.add("hidden");
    }
  }
}

function changeRadio(imgController) {
  const input = imgController.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    const num = i;
    if (num == currentIdx) {
      input[num].checked = true;
    } else {
      input[num].checked = false;
    }
  }
}

// 클릭 방지 영역 선택 시 모든 데이터 시트 창 닫기
function activeClickBlock() {
  removeController();
  closePopAll();
  removeClickBlock();
}

// 현재 선택된 리스트에서 작업
function currentList(selectedList) {
  const clickedList = selectedList;
  const activeDataSheet = clickedList.nextElementSibling;
  const magImages = activeDataSheet.querySelector(".magImages");
  const imgController = activeDataSheet.querySelector(".imgController");
  const images = magImages.children;
  const magImagesLength = images.length;
  const imageMaxLength = images.length - 1;
  const closeBtn = activeDataSheet.querySelector(".closeBtn");

  createController(imgController, magImagesLength);

  const controllers = imgController.querySelectorAll("input");

  checkedRadio(controllers, images);

  // 컨트롤러 클릭 시 해당 번호 사진으로 교체
  function clickedControls() {
    checkedRadio(controllers, images);
  }

  // 이전 버튼 클릭 시 다음 사진으로 교체
  function prevImage() {
    if (currentIdx > 0) {
      currentIdx -= 1;
    } else {
      currentIdx = imageMaxLength;
    }
    changeRadio(imgController);
    checkedRadio(controllers, images);
  }

  // 다음 버튼 클릭 시 다음 사진으로 교체
  function nextImage() {
    if (currentIdx < imageMaxLength) {
      currentIdx += 1;
    } else {
      currentIdx = 0;
    }
    changeRadio(imgController);
    checkedRadio(controllers, images);
  }

  for (let i = 0; i < controllers.length; i++) {
    currentIdx = i;
    controllers[i].addEventListener("click", clickedControls);
  }

  // 이전 버튼 클릭 시 사진 바꾸기
  const prevBtn = activeDataSheet.querySelector(".prevBtn");
  prevBtn.addEventListener("click", prevImage);

  // 다음 버튼 클릭 시 사진 바꾸기
  const nextBtn = activeDataSheet.querySelector(".nextBtn");
  nextBtn.addEventListener("click", nextImage);

  // 닫기 버튼 클릭 시 창 모두 닫기
  closeBtn.addEventListener("click", activeClickBlock);

  // 클릭 방지 창 선택 시 창 모두 닫기
  const clickBlock = body.querySelector(".click-block");
  clickBlock.addEventListener("click", activeClickBlock);
}

// 리스트 선택 시 데이터 시트 창 활성화
for (let i = 0; i < productLength; i++) {
  productList[i].addEventListener("click", openPop);
}
