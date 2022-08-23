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

// JS for easy Star animation

setTimeout(function () {
  const star = document.getElementById("star");
  // star.style.display = "block";
  star.classList.remove("hide");
  star.classList.add("star");
}, 200);
