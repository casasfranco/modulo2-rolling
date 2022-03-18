// Ciclos :

//While
let i = 0;
while (i > 0 && i < 10) {
  //hago algo
  i++;
}

//Do while
do {
  i++;
} while (i > 0 && i < 10);

//For
for (let i = 0; i > 0 && i < 10; i++) {}

//Array
let numeros = [];

let total = 0;
for (let i = 0; i < numeros.length; i++) {
  // suma += numeros[i];
  total = total + numeros[i];

  console.log(`suma en la vuelta ${i} es: ${total}`);
}
console.log("total:" + total);

// const numeroDesdeUsuario = Number(prompt("Ingrese un numero"));

// console.log(numeros);
// //[5, 10, 20, 30, 100]
// numeros.push(numeroDesdeUsuario);

// //[5, 10, 20, 30, 100,5]
// console.log(numeros);

let arregloDeNumeros = [10];
console.log(arregloDeNumeros);
// for (let i = 0; i < 2; i++) {
//   const numero = Number(prompt("Ingrese un numero"));

//   arregloDeNumeros.push(numero);
// }

console.log(arregloDeNumeros);

const months = ["Jan", "March", "April", "June"];
// console.log(months);
// months.splice(1, 0, "Feb"); //['Jan', 'Feb','March', 'April', 'June']
// console.log(months);

console.log(months);
months.splice(-2, 0, "Feb"); //['Jan', 'Feb','March', 'April', 'June']
console.log(months);
// months.splice(1, 0, "Feb"); //['Jan', 'Feb','March', 'April', 'June']
numeros = [1, 1, 5, 4, 4];

