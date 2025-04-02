//changer l image de profil en cliquant
const avatarImage = document.querySelector('#imageProfil');

avatarImage.addEventListener ('click',()=>{
imageProfil.src='image/avatar.svg';
});

console.log(avatarImage);

//changer le prenom en modifiant en blanc la couleur

const btnPrenom = document.querySelector('#btn-prenom');
const firstName= document.querySelector('#firstname');
const bannerBg = document.querySelectorAll('.pink-bg');
const pinkText = document.querySelectorAll ('.pink-text');

btnPrenom.addEventListener('click', () =>{
    const newName = prompt('Change ton prénom ici :)');
    const newColor = prompt('change la couleur de ton prénom');
    const newBg = prompt('change la couleur de la bannière :'); //modifier le background de la banner
    const newColorText = prompt('change la couleur des textes en rose :')


    firstName.innerText = newName;
    firstName.style.color = newColor;

//remplacer les éléments en rose par la couleur #750ff7 .
    bannerBg.forEach((bg) => {
        bg.style.backgroundColor=newBg;
    });
    pinkText.forEach((text) =>{
        text.style.color = newColorText;
    });
   

}
);

//changer les <a> HTML en couleur #750ff7 

const lien = document.querySelector('#lien');
const lien2 = document.querySelector('#lien2');

lien.style.color = " #750ff7";
lien2.style.color = " #750ff7";


//modifier les li d un ul
const tools = document.querySelector("#front-dev-tools");

const listItems = tools.querySelectorAll("li");

listItems.forEach ((item, index) => {
    listItems[0].textContent = "GitHub";   
    listItems[1].textContent = "Terminal"; 
    listItems[2].textContent = "VS Code";

});




