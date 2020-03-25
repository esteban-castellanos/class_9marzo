/*
function dameCinco() {
    return console.log([1,2,3,4,5]);
}
dameCinco();

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
*/

let dameCinco = () => 
{
    return console.log([1,2,3,4,5]);
}

dameCinco();

let multiplicarPorDos = (numero) => {
    let resultado=numero * 2;
console.log(resultado);
}

multiplicarPorDos(6);

let mostrarNombre =() => {
    console.log("Mi nombre es Hernán");
}

mostrarNombre();

//Arrow function con un parámetro
/*function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}*/

let saludar = (nombre) => 
{
    return console.log("hola, " + nombre +"!");
}

saludar("esteban");

//Ahora probemos con más de uno
/*function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}
*/

let saludar2 = (nombre, apellido) =>
{
    return console.log("hola, "+ nombre + " " + apellido+ "!");
    
}
saludar2("esteban", "castellanos");