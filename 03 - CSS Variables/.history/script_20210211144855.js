"user strict";

const spacingInput = document.querySelector("#spacing");
const baseInput = document.querySelector("#base");
const blurInput = document.querySelector("#blur");

const addEvents = (arr, event, func) => {
  arr.forEach((el) => {
    el.addEventListener(event, func);
  });
};
