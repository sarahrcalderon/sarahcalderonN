document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      menu.classList.toggle("active");
    });

    if (closeMenu) {
      closeMenu.addEventListener("click", function () {
        menu.classList.remove("active");
      });
    }

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target)) {
        menu.classList.remove("active");
      }
    });
  }
});
