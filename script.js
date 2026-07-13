document.querySelectorAll('.bt').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 880) + "px";
    el.style.top = (Math.random() * 450) + "px";
  });
});
document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 490 +360) + "px";
    el.style.top = (Math.random() * 130 + 190) + "px";
  });
});