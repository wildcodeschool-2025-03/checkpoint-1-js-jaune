// Variables
const avatar = document.querySelector(".bannerAvatar");
const changeName = document.querySelector(".changeMatt");
const firstname = document.querySelector("#firstname");
const descriptionBg = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");
const linkColor = document.querySelectorAll("a");

const toolList = document.querySelectorAll("#front-dev-tools li");
const changeToolButton = document.querySelector(".changeTools");

const toolAdd = document.querySelector("#form");
const toolText = document.querySelector("#toolText");
const frontEndList = document.querySelector(".frontEndSkills");


// Listeners
avatar.addEventListener('click', function () {
    avatar.src = "./image/avatar.svg";
});

changeName.addEventListener('click', function () {

    const bannerColor = prompt("What color ?");
    const userName = prompt("What is your name ?");

    if (bannerColor != null) {

        for (bg of descriptionBg) {
            bg.style.backgroundColor = bannerColor;
        }

        for (lk of linkColor) {
            lk.style.color = bannerColor;
        }

        for (txt of textColor) {
            txt.style.color = bannerColor;
        }
    }

    if (userName != null) {
        firstname.innerHTML = userName;
        firstname.style.color = "white";
    }
})

changeToolButton.addEventListener("click", function () {
    const myToolList = ["Github", "VSCode", "Tailwind"];

    for (let i = 0; i < toolList.length; i++) {
        toolList[i].innerHTML = myToolList[i];
    }
})

toolAdd.onsubmit = function (event) {
    event.preventDefault();

    const newText = document.createElement("li");
    newText.innerHTML = toolText.value;
    frontEndList.appendChild(newText);

    toolText.value = '';
}