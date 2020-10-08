const btn = document.querySelector(".header__expand-icon");
const div = document.querySelector(".buy-points");
const svg = document.querySelector(".header__expand-icon--svg");

let opened = false;

btn.addEventListener("click", () => {
  opened = !opened;
  if (opened) {
    svg.src =
      "https://cdn.salesjet.io/850/funnel_files/1155/271_right-arrow.svg";
    return div.classList.remove("d-none");
  }
  svg.src = "https://cdn.salesjet.io/850/funnel_files/1155/270_down-arrow.svg";
  return div.classList.add("d-none");
});
