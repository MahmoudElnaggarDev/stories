const textarea = document.getElementById("textarea");
const fontSize = document.getElementById("font-size");
const fontFamily = document.getElementById("font-family");
const fontWeight = document.getElementById("font-weight");
const color = document.getElementById("color");
const bgColor = document.getElementById("bg-color");
const image = document.getElementById("image");
const button = document.getElementById("button");
/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
*/
window.onload = () => {
  if (localStorage.getItem("text")) {
    textarea.value = localStorage.getItem("text");
    image.innerText = localStorage.getItem("text");
  }
}

textarea.addEventListener("input", () => {
  image.innerText = textarea.value;
  localStorage.setItem("text", textarea.value);
});

fontSize.addEventListener("input", () => {
  image.style.fontSize = fontSize.value;
});

fontFamily.addEventListener("input", () => {
  image.style.fontFamily = fontFamily.value;
});

fontWeight.addEventListener("change", () => {
  image.style.fontWeight = fontWeight.value;
});

color.addEventListener("change", () => {
  image.style.color = color.value;
});

bgColor.addEventListener("change", () => {
  image.style.backgroundColor = bgColor.value;
});

button.addEventListener("click", () => {
  html2canvas(image).then(function(canvas) {
    saveAs(canvas.toDataURL(), 'story.png');
  });
});

function saveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}