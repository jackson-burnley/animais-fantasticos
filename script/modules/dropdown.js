import outsideClick from "./outsideclick.js";

export default function initDropDown() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  dropdownMenu.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }
}
