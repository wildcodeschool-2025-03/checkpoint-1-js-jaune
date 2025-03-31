
//Image click
const avatar = document.querySelector('.avatar');

avatar.addEventListener('click', () => {
    const newAvatar  = prompt('Change Avatar');
});




const firstNameId = document.getElementById('firstname');

firstNameId.addEventListener('click', () => {
  const newName = prompt("Enter your name:");
  if (newName) {
    firstNameId.textContent = newName;
    firstNameId.style.color = 'white';
  }
});


