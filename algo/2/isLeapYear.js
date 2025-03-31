/*
Écris une fonction qui peut déterminer si une année est 
une année bissextile. Elle doit renvoyer `true` 
si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible 
par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

//année est bissextile si elle est divisible par 4 et
// (soit elle n'est pas divisible par 100, soit elle est divisible par 400).
function isLeapYear(year) {
  if (year%4 === 0 && year%400 === 0){
    return true;

  } else if (year%4 === 0 && year% 100 !== 0){
    return true;
  }return false;
 }
console.log(isLeapYear(4));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(2004));
console.log(isLeapYear(2016));
console.log(isLeapYear(2020));

module.exports = isLeapYear;
