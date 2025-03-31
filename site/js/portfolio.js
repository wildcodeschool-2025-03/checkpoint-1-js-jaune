// Etape 1 changement d'avatar quand je clic sur l'image
document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.querySelector(".avatarfirstbanner img");
    const img1 = "image/avatar-bis.png";
    const img2 = "image/avatar.svg";

    avatar.addEventListener("click", function () {
        avatar.src = avatar.src.includes("avatar-bis.png") ? img2 : img1;
    });
});


// Etape 2 je peut mettre mon nom qui deviens blanc quand je clic sur le bouton
// Etape 3 j'ajoute le changement de couleur  en commentaire
// Etape 4 remplacer tous les elements en rose par la couleur choisi
document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.querySelector("#firstname"); 
    const descriptionButton = document.querySelector(".descriptionbutton");
    
    //const descriptionPink = document.querySelector(".pink-bg"); resultat etape 3
    const pinkElements = document.querySelectorAll(".pink-bg, .pink-text"); 
    const descriptionPink = document.querySelector(".description.pink-bg", "footer.description.pink-bg");
    
    descriptionButton.addEventListener("click", function () {
        const name = prompt("Entrez votre prénom :");
        const bgColor = prompt("Entrez votre couleur (ex: red ou #750ff7) :");

        if (name) {
            firstName.textContent = name;
            firstName.style.color = "white";
        }

        if (bgColor) {
            // descriptionPink.style.backgroundColor = bgColor; resultat etape 3
            pinkElements.forEach((element) => {
                element.style.color = bgColor; 
                if (element.classList.contains("pink-bg")) {
                    element.style.backgroundColor = bgColor; 
                }
            });
            
            if (descriptionPink) {
                descriptionPink.style.color = "white";
            }
        }
    });
});