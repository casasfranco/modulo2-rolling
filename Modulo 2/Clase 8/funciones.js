// function sumarDosNumeros() {

// }
console.log("hola estoy fuera la funcion ");

function sumarDosNumeros(numero1, numero2) {
  const total = numero1 + numero2;
  console.log(`El total es: ${total}`);
  return total;
}

const totalSuma = sumarDosNumeros(10, 10);
console.log(`El total luego de llamar a la funcion es: ${totalSuma}`);

function mostrarNumeroIngresado(valor) {
  alert("El numero ingresado es: " + valor);
}

const numeroIngresado = prompt("Ingrese un numero");

mostrarNumeroIngresado(numeroIngresado);
