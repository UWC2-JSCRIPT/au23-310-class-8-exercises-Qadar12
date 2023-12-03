let rgb = 255;

let darknessInterval = setInterval(function () {
  if (rgb > 0) {
    rgb--;
    document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
  } else {
    clearInterval((document.body.style.backgroundColor = "rgb(255, 255, 255)"));
  }
}, 500);
