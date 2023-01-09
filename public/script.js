const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");

menuButton.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (!phoneMenu.classList.contains("hidden") && e.key == "Escape") {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});
