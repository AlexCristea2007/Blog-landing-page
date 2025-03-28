const openMenuBtn = document.getElementById("open_menu_btn");
const closeMenuBtn = document.getElementById("close_menu_btn");

const navMenu = document.querySelector(".nav_menu");
const navMenuLinks = document.querySelectorAll(".menu_nav_link");
const navMenuArrows = document.querySelectorAll(".menu_nav_link_arrow");
const navMenuDropdowns = document.querySelectorAll(".menu_nav_link_dropdown");

openMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  if (!navMenu.classList.contains("active")) {
    navMenu.classList.add("active");
  }
});
closeMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
  navMenu.classList.remove("active");
});

navMenuLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (!navMenuDropdowns[index].classList.contains("active")) {
      navMenuLinks[index].style.color = "var(--VeryDarkGrayishBlue)";
      navMenuArrows[index].style.transform = "rotate(180deg)";
      navMenuDropdowns[index].classList.add("active");
    } else {
      navMenuLinks[index].style.color = "var(--VeryDarkBlackBlue)";
      navMenuArrows[index].style.transform = "";
      navMenuDropdowns[index].classList.remove("active");
    }
  });
});

window.addEventListener("resize", () => {
  let bodyWidth = document.documentElement.clientWidth;

  if (bodyWidth > 900) {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  } else {
    openMenuBtn.style.display = "block";
  }
});
