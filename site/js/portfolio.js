document.addEventListener("DOMContentLoaded", function () {
    const avatarImg = document.getElementById('avatar');
    const changeButton = document.getElementById('changeButton');
    const span = document.getElementById('name');

    avatarImg.addEventListener('click', function () {
      avatarImg.src = "./image/avatar.svg"; 
    });
    changeButton.addEventListener("click", function(){
        
        let newColor = prompt("Entrez la nouvelle couleur pour les éléments pink");
        if(newColor) {
          
          document.querySelectorAll(".pink-bg").forEach(function(element) {
            element.style.backgroundColor = newColor;
          });
      
          document.querySelectorAll(".pink-text").forEach(function(element) {
            element.style.color = newColor;
          });
        }
    
        let newName = prompt("Entrez votre nouveau nom :", span.textContent);
        if(newName && newName.trim() !== ""){
          span.textContent = newName;
          span.style.color = "white";
        }
      });
  });