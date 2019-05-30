function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("./temp.js");
console.log("index.js");
