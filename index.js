document.body.classList.add("loading");
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
  document.body.classList.remove("loading");
});

const links = document.querySelectorAll(".nav__items");
links.forEach((item) => {
  item.addEventListener("click", () => {
    let el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__items-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__items").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

var typed = new Typed(".dynamic-text", {
  // Waits 1000ms after typing "First"
  strings: ["Developer.", "Coder.", "Programmer.", "PhotoGrapher."],
  loop: true,
  smartBackspace: false,
  typeSpeed: 100,
  backSpeed: 80,
  cursorChar: "|",
  backDelay: 1500,
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 590);
});

AOS.init();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
