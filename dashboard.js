const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("active");
});

AOS.init({
duration:1000,
once:true
});