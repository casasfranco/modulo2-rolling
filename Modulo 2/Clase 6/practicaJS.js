// Number

// Redondear para abajo
console.log(Math.floor(45.89));

//Redondear al numero mas cercano
console.log(Math.round(45.5));
// console.log(Math.round(45.89));
// console.log(Math.round(45.47));

// Obtener el máximo
console.log("El numero maximo es: " + Math.max(45, 17, 0.2, 45.001, 45.02));
// Obtener el minimo
console.log("El numero minimo es: " + Math.min(45, 17, 0.2, 45.001, 45.002));

const base = parseInt("4");
const exponente = 2;
//Elevar a la potencia
console.log(
  `El numero base es ${base} a la potencia ${exponente} es: ` +
    Math.pow(base, exponente)
);

//Numero aleatorio
console.log("El numero aleatorio es: " + Math.round(Math.random() * 1000));

//Obtener la raiz cuadrada
console.log(Math.sqrt(64));

const numero1 = "34.656778";

//Obtener un numero con dos decimales
console.log(Math.round(numero1 * 100) / 100);

const aux = Math.round(numero1 * 100) / 100;
//Obtenemos un numero con 1 decimal con toFixed()
console.log(aux.toFixed(1));

//parseFloat devuelve un numero con punto flotante (coma/decimales)
console.log(parseFloat(numero1).toFixed(4));
//Numer convierte un strin a numero (si tiene coma la mantiene)
console.log(Number(numero1).toFixed(4));
