(function () {
  var btn = document.getElementById("navToggle");
  var panel = document.getElementById("navPanel");
  if (!btn || !panel) return;
  btn.addEventListener("click", function () {
    panel.classList.toggle("open");
    btn.setAttribute("aria-expanded", panel.classList.contains("open") ? "true" : "false");
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      panel.classList.remove("open");
    });
  });
})();
