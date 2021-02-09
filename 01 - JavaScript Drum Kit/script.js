(function (window) {
  "user strict";

  window.addEventListener("keydown", playAudio);

  const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  };

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  // Remove the class - Keyup version
  //   window.addEventListener("keyup", (e) => {
  //     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //     key.classList.remove("playing");
  //   });

  // Remove the class - Tutorial version
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
})(window);
