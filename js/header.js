const header = document.querySelector("header")

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    header.dataset.position = "ontop";
  } else {
    header.dataset.position = "begin";
  }
});