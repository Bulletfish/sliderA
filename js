const slider = document.querySelector(".slider");
let isDragging = false;

slider.addEventListener("mousedown", function() {
  isDragging = true;
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});

document.addEventListener("mousemove", function(event) {
  if (!isDragging) return;
  let x = event.clientX;
  let beforeAfter = document.querySelector(".before-after");
  let left = beforeAfter.offsetLeft;
  let right = beforeAfter.offsetLeft + beforeAfter.offsetWidth;
  if (x > left && x < right) {
    slider.style.left = x - beforeAfter.offsetLeft + "px";
  }
});
