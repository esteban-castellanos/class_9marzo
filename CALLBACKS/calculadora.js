let sumar = (valor1, valor2) => valor1 + valor2;
let restar = (valor1, valor2) => valor1 - valor2;
let multiplicar = (valor1, valor2) => valor1 * valor2;
let dividir = (valor1, valor2) => valor1 / valor2;

let calculadora = (valor1, valor2, operacion) => console.log(operacion(valor1, valor2));

calculadora(2,3,multiplicar);

