import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(e) {
  menuList.classList.add("active");
  menuButton.classList.add("active");
  outsideClick(menuList, () => {
    menuList.classList.remove("active");
    menuButton.classList.remove("active");
  });
}

menuButton.addEventListener("click", openMenu);
