"use strict";

const inputs = document.querySelectorAll("input");
console.log(inputs);

function handleUpdate() {
  console.log("changing");
  const suffix = this.dataset.sizing || "";
  const root = document.documentElement;

  root.style.setProperty(`--${this.name}`, suffix);

  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
}
