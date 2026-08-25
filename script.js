document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  nav.style.display = open ? "flex" : "";
  if (open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "18px 5%";
    nav.style.background = "#fff";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "stretch";
    nav.style.boxShadow = "0 15px 30px rgba(0,0,0,.08)";
  }
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    if (window.innerWidth <= 900) nav.style.display = "";
  });
});
