const navBtn = document.querySelector(".nav-activator");
const ul = document.querySelector(".nav--responsive__ul");

navBtn.addEventListener("click", () => {
  ul.classList.toggle("d-none");
  navBtn.classList.toggle("mb-2");
});
