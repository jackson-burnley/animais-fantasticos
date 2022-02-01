export default function outsideClick(element, callback) {
  const html = document.documentElement;

  setTimeout(() => {
    html.addEventListener("click", handleOutsideClick);
  }, 0);

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}
