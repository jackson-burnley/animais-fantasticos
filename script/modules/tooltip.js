export default function initTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");
tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(e) {
  const tooltipBox = criarTooltip(this);

  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener("mousemove", onMouseMove);

  function onMouseLeave(e) {
    tooltipBox.remove();
  }

  this.addEventListener("mouseleave", onMouseLeave);
}

const onMouseMove = {
  handleEvent(e) {
    this.tooltipBox.style.top = e.pageY + 20 + "px";
    this.tooltipBox.style.left = e.pageX + 20 + "px";
  },
};

function criarTooltip(e) {
  const tooltipBox = document.createElement("div");
  const text = e.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
