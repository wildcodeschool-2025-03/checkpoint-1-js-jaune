/*
Écris une fonction qui, étant donné deux 
angles d'un triangle, renverra la valeur du 
troisième.

(Rappel : la somme des valeurs des trois 
angles dans un triangle est **toujours** 180°) ok

Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  const sum = 180;
  result = sum - a - b;
  return result;
}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));

module.exports = thirdAngle;
