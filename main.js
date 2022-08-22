// JS for toggle menu
const showMenu = document.querySelector(".fa-bars");
const hideMenu = document.querySelector(".fa-times");

const navLinks = document.querySelector("#navLinks");

hideMenu.addEventListener("click", () => {
  navLinks.style.right = "-200px";
  console.log("hiding");
});

showMenu.addEventListener("click", () => {
  console.log("showing");
  navLinks.style.right = "0";
});
