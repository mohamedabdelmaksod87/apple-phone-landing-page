const mainImage = document.querySelector(".image img");
const phones = document.querySelectorAll("footer img");

for (const phone of phones) {
  phone.addEventListener("click", () => {
    mainImage.src = phone.src;
    document.body.style.backgroundColor = phone.dataset.color;
  });
}

function showMenu() {
  let panel = document.querySelector("header ul");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
  document.querySelector(".links .menu-icon").classList.toggle("hide");
  document.querySelector(".links .close-icon").classList.toggle("show");
}
