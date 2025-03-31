const pick = document.querySelector('.avatar')
pick.addEventListener('click', () => {
if (pick.src.includes('avatar-bis.png')) {
    pick.src ='image/avatar.svg'
} else {
    pick.src ='image/avatar-bis.png';
}
}
);
// step 2 //
const button = document.getElementById('modifyBtn')
const h2 = document.getElementById('firstname')

button.addEventListener('click', () => {
  
   const changeName = prompt('Entrez votre nom :');


   if (changeName) {
    
     h2.textContent = changeName;

    
     h2.style.color = 'white';
   }
 });
    