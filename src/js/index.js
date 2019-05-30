// 获取元素
function getElement() {
  const nav = document.getElementById("nav");
  const liList = nav.getElementsByTagName("li");
  console.log(liList);
  nav.remove();
}

getElement();
