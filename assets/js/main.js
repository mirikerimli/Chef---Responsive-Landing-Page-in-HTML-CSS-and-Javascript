const navbar = document.querySelector(".navbar");
const html = document.querySelector("html");
const navbarItems = document.querySelectorAll(".navbar .container a");
const scroll_top = document.querySelector("#scroll_top");
const menu = document.querySelector(".navbar_items");
const closeBtn = document.querySelector(".close-btn");
const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const en = document.querySelector(".main_lang .en");
const ru = document.querySelector(".main_lang .ru");
const az = document.querySelector(".main_lang .az");
const enSub = document.querySelector(".lang .en");
const ruSub = document.querySelector(".lang .ru");
const azSub = document.querySelector(".lang .az");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("nav_scrolled", window.scrollY > 100);
  navbarItems.forEach((item) => {
    item.classList.toggle("navbar_el", window.scrollY > 100);
  });
  if (window.scrollY < 120) {
    scroll_top.style.display = "none";
  } else {
    scroll_top.style.display = "inline-block";
  }
});

scroll_top.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
  html.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  html.classList.remove("active");
});

enSub.addEventListener("click", () => {
  if (!ru.classList.contains("toggle")) {
    en.classList.toggle("toggle");
    ru.classList.toggle("toggle");
    enSub.classList.toggle("toggle");
    ruSub.classList.toggle("toggle");
  } else if (!az.classList.contains("toggle")) {
    en.classList.toggle("toggle");
    az.classList.toggle("toggle");
    enSub.classList.toggle("toggle");
    azSub.classList.toggle("toggle");
  }
});

ruSub.addEventListener("click", () => {
  if (!en.classList.contains("toggle")) {
    en.classList.toggle("toggle");
    ru.classList.toggle("toggle");
    enSub.classList.toggle("toggle");
    ruSub.classList.toggle("toggle");
  } else if (!az.classList.contains("toggle")) {
    ru.classList.toggle("toggle");
    az.classList.toggle("toggle");
    ruSub.classList.toggle("toggle");
    azSub.classList.toggle("toggle");
  }
});

azSub.addEventListener("click", () => {
  if (!ru.classList.contains("toggle")) {
    az.classList.toggle("toggle");
    ru.classList.toggle("toggle");
    azSub.classList.toggle("toggle");
    ruSub.classList.toggle("toggle");
  } else if (!en.classList.contains("toggle")) {
    en.classList.toggle("toggle");
    az.classList.toggle("toggle");
    enSub.classList.toggle("toggle");
    azSub.classList.toggle("toggle");
  }
});
