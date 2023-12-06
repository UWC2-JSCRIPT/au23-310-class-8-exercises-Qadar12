let rgb = 0;

const animate = function () {
  if (rgb < 255) {
    rgb++;
    document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    requestAnimationFrame(animate);
  }
};
requestAnimationFrame(animate);
