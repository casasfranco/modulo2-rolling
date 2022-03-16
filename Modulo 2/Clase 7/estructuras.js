//IF
/*
  if(condicion){
    // algo que quiero que se ejecute si la condicion es true (verdadera/se cumple)
  }
  */

// if (10 > 5) {
//   // algo que quiero que se ejecute si la condicion es true (verdadera/se cumple)
//   if (10 > 8) {
//     console.log("El número está entre 10 y 20");
//   }
// }
/*condicionA && condicionB
      10 > 5 && 10 > 8
        true && true  ----> resultado = true
*/

// if (10 > 5 && 10 > 8) {
//   console.log("El número está entre 10 y 20");
// }
//     && --> AND o Y
//     || --> OR o o

let num = 20;
// if (num >= 10) {
//   if (num <= 20) {
//     console.log("El número está entre 10 y 20");
//   }
// }

if (num === 10 && num <= 20) {
  console.log("El número es igual a 10 o menor o igual que 20");
}
if (num === 10 || num < 20) {
  console.log("El número es igual a 10 o menor o igual que 20");
}
