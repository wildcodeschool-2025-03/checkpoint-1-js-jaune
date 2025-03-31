// Changement de l'image au click
const imgAvatar = document.querySelector(".avatar1");

imgAvatar.addEventListener("click", function () {
    imgAvatar.src = "site/image/avatar-bis.png";
    imgAvatar.alt = "Test";
});


// Changegement du nom et de la couleur avec le bouton 
const name1 = document.getElementById("firstname");
const textBtn = document.getElementById("changeTextBtn");

textBtn.addEventListener("click", function() {

    const newColor = prompt("Changez la couleur !");
    const newName = prompt("Entrez votre nom ici:");

    if (newColor) {

        const pinkElements = document.querySelectorAll(".pink-text, .pink-bg");

        pinkElements.forEach(function(element) {
            element.style.backgroundColor = newColor;
            element.style.color = newColor;
        })};

    if (newName) {
        name1.textContent = newName;
        name1.style.color = "white";
    }

});
