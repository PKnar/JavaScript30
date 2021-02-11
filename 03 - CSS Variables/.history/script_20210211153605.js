"use strict";

const inputs = document.querySelectorAll("input");

function handleUpdate() {
  console.log("changing");
  const suffix = this.dataset.sizing || "";
  const root = document.documentElement;

  root.style.setProperty(`--${this.name}`, suffix);
}
