const avatar = document.querySelector("#avatar");
avatar.addEventListener("click", function () {
  avatar.src = "./image/avatar.svg";
});

const buttonPrompt = document.querySelector("#button_prompt");
const firstName = document.querySelector("#firstname");

buttonPrompt.addEventListener("click", function () {
  const currentName = firstName.textContent;
  const newName = window.prompt("Enter your name :", currentName);
  firstName.textContent = newName;
});

/* CHANGE BACKGROUND COLOR

const descriptionPinkBg = document.querySelector(".pink-bg");

buttonPrompt.addEventListener("click", function () {
  const newBackground = window.prompt("Enter your background :");
  descriptionPinkBg.style.backgroundColor = newBackground;
});
*/

const PinkColor = document.querySelectorAll(".pink-bg, .pink-text");
buttonPrompt.addEventListener("click", function () {
  const newColor = window.prompt("Enter your color :");
  PinkColor.forEach(function (colors) {
    if (colors.classList.contains("pink-bg")) {
      colors.style.backgroundColor = newColor;
    } else if (colors.classList.contains("pink-text")) {
      colors.style.color = newColor;
    }
  });
});
