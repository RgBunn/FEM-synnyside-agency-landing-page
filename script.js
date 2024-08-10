const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".menu-mobile");
const hero = document.querySelector(".hero");

burgerMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  hero.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    burgerMenu.style.opacity = 1;
  } else {
    burgerMenu.style.opacity = 0.4;
  }
});
