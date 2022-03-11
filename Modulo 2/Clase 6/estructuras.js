//IF
/*
  if(condicion){
    // algo que quiero que se ejecute si la condicion es true (verdadera/se cumple)
  }
*/

// let numero = 11;
// if (numero <= 10) {
//   // codigo que queremos que se ejecute
//   console.log(`El numero es menor o igual que 10`);
// } else {
//   console.log("El numero es mayor 10");
// }

let palabraBuscada = prompt("ingrese el nombre de una marca");
// let palabraBuscada = "pepsi";
let nombreMarcaPepsi = "pepsi";
if (palabraBuscada === nombreMarcaPepsi) {
  // codigo que queremos que se ejecute
  console.log(`La marca que buscaste es pepsi`);
} else {
  // codigo que queremos que se ejecute si no se cumple la condicion
  console.log(`La marca que buscaste no es pepsi`);
}

//Condiciones anidadas
// let numero = 11;
// let numero = Number(prompt("Ingrese un numero entero"));
let numero = 10;
//Mejorar si no es numero, no haga nada (no evalue/ no entre al if)
if (numero < 10) {
  console.log(`El numero ${numero} es menor a 10`);
} else if (numero === 10) {
  console.log(`El numero ${numero} es igual a 10`);
} else {
  console.log(`El numero ${numero} es mayor a 10`);
}

switch (palabraBuscada) {
  case "coca":
    // bloque de código
    console.log("La palabra buscada es coca");
    break;
  case "coca":
    // bloque de código
    console.log("La palabra buscada es de coca");
    break;
  default:
    // bloque de código
    console.log("La palabra buscada NO esta en las opciones");
}
