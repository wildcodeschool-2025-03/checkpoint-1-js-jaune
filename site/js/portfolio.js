//changement portrait avatar

const avatar = document.querySelector("#avatar");
avatar.addEventListener("click", () => {
  if (avatar.src.slice(-2, -1) === "v") {
    avatar.src = "../site/image/avatar-bis.png";
  } else {
    avatar.src = "../site/image/avatar.svg";
  }
});

//changement nom avatar

const firstnameSpan = document.querySelector("#firstname");
//const sectionDescription = document.querySelector(".pink-bg");
const root = document.querySelector(":root");
const btnModifyName = document.querySelector("#modify");
btnModifyName.addEventListener("click", () => {
  const newBgColor = prompt("Enter a color");
  const newFirstname = prompt("Enter your name");
  //sectionDescription.style.backgroundColor = newBgColor;
  firstnameSpan.innerHTML = newFirstname;
  //firstnameSpan.style.color = "white";
  root.style.setProperty("--lightWildColor", newBgColor);
});
