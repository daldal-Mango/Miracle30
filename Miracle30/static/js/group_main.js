// modal 창 띄우기
const modal = document.getElementById("myModal"),
  modalBtn = document.querySelectorAll(".btn"), // 버튼 누르면 모달버튼 뜸
  closeBtn = document.querySelector(".close");

// modalBtn.onclick = function () {
//   modal.style.display = "block";
// };

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// 데이터 넣기
// const btn = document.querySelectorAll(".btn"),
const pTag = document.getElementsByTagName("p"),
  modalBody = document.querySelector(".modal-body");

modalBtn.forEach((elem, index) => {
  elem.addEventListener("click", (e) => {
    modal.style.display = "block";
    let data = pTag[index - 2].textContent;
    data = data.replace(/'/gi, "");
    data = data.substr(1, data.length - 2);
    modalBody.textContent = data;
  });
});
