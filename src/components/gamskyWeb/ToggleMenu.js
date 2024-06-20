// JavaScript to toggle mobile menu
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navLinks = document.querySelector("nav ul");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
