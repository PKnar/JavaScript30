"user strict";

const inputs = document.querySelectorAll("input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  const root = document.documentElement;

  root.style.setProperty(`--${this.name}`, this.suffix);

  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
}
