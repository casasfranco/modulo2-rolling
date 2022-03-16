/*
  while (condition) {
  Codigo que quiero que se repita si se cumple la condicion
  }
*/

let i = 1;

while (i < 10) {
  console.log(`El valor de i antes: ${i}`);
  // i = i + 1;
  i++;
}

let j = 1;
do {
  console.log(`El valor de j antes: ${j}`);
  // acá va el cuerpo del ciclo, el código que se va a repetir al menos una vez y mientras la condición se cumpla
  j++;
} while (j < 10);

for (let k = 1; k < 10; k++) {
  console.log(`El valor de k antes: ${k}`);
}
