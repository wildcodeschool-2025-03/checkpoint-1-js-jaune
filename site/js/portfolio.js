const avatar = document.querySelector('#avatar');

const changeImage = ()=>{

avatar.src = "image/avatar.svg";
}
avatar.addEventListener ('click', changeImage);


const firstName = document.querySelector('#first-name');




const changeName = () => {
   const newName = prompt('Entrez votre prénom :');
   
  
   if (newName) {
     firstName.textContent = newName;
     firstName.style.color = 'white'; 
   } else {
     alert('Vous devez entrer un prénom!');
   }
};

firstName.addEventListener('click', changeName);