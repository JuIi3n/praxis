const menu_toggle = document.getElementById("menu_toggle")
const menu = document.getElementById("menu_container")

menu_toggle.onclick = function() {
  menu_toggle.classList.toggle("nav-active")
  setTimeout(() => {menu.classList.toggle("nav-active")}, 800)
}