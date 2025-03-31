// Variables
const avatar = document.querySelector(".bannerAvatar");
const changeName = document.querySelector(".changeMatt");
const firstname = document.querySelector("#firstname");
const descriptionBg = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");


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

        for (txt of textColor) {
            txt.style.color = bannerColor;
        }
    }

    if (userName != null) {
        firstname.innerHTML = userName;
        firstname.style.color = "white";
    }
})

// Debug