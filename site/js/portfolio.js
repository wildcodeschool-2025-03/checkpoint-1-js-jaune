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
  const colorLinkHtml = prompt("Enter link HTML color");
  //sectionDescription.style.backgroundColor = newBgColor;
  firstnameSpan.innerHTML = newFirstname;
  //firstnameSpan.style.color = "white";
  root.style.setProperty("--lightWildColor", newBgColor);

  //changer les lin html
  const allLinkHtml = document.querySelectorAll("a");
  for (const a of allLinkHtml) {
    a.style.color = colorLinkHtml;
  }
});

///modifier front dev tools

const btnModifyTools = document.querySelector("#btnModifyTools");
btnModifyTools.addEventListener("click", () => {
  const parentAllLi = document.querySelector("#front-dev-tools");
  const allLi = parentAllLi.children;
  allLi[0].innerHTML = "VSCode";
  allLi[1].innerHTML = "Github";
  allLi[2].innerHTML = "Terminal";
});

//step7

const btnAddTool = document.querySelector("#addBackEndTool");
btnAddTool.addEventListener("click", () => {
  const inputTool = document.querySelector("#inputTool");
  const parentLi = document.querySelector("#BackEndTools");

  const newLi = document.createElement("li");
  parentLi.appendChild(newLi);
  newLi.innerText = inputTool.value;
});
