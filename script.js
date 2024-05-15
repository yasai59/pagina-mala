document.addEventListener("click", () => {
  const audio = new Audio("./assets/song.mp3");
  audio.loop = true;
  audio.play();
});
