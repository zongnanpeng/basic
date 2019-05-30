const model = document.querySelector("#model");
const modelBtn = document.querySelector("#modelBtn");
const modelCloseBtn = document.querySelector("#modelCloseBtn");
const isOk = document.querySelector("#isOk");

window.addEventListener("click", e => {
  if (e.target === model) {
    closeModel();
  }
});
modelCloseBtn.addEventListener("click", closeModel);
isOk.addEventListener("click", closeModel);
modelBtn.addEventListener("click", displayModel);
function displayModel() {
  model.style.display = "block";
}

function closeModel() {
  model.style.display = "none";
}
