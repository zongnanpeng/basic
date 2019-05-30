const leftBox = document.getElementById("left-box");
const rightBox = document.getElementById("right-box");

leftBox.addEventListener("click", () => {
  leftBox.style.width = "75%";
  rightBox.style.width = "25%";
});
rightBox.addEventListener("click", () => {
  leftBox.style.width = "25%";
  rightBox.style.width = "75%";
  console.log(111);
});
