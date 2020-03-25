//1-Crear un aray con 3 objetos literales(tareas con titulo y estado)
//2- Crear una funcion que muestre el titulo y estado de cada tarea
//3- Pasar Obj. literal --> JSON
//4- Mostrar por consola el tipo de dato
//5 Pasar de JSON a Objeto literal
//6 Crear en la carpeta actual un archivo llamado tareas.json
//7 Escribir el string convertido en el archivo .json

let tarea = [{ titulo: "ver material",estado: "completo"},
{titulo: "hacer pratica",estado: "en progreso"},
{titulo: "ver clase del jueves",estado: "pendiente"}];

function leerObjeto(objetos)
{
    for(let i=0; i<objetos.length; i++)
    {
        console.log("tarea: "+objetos[i].titulo);
        console.log("estado: "+objetos[i].estado+"\n");
    }
}
// de objeto literal a JSON
let datosConvertidos = JSON.stringify(tarea);

console.log(datosConvertidos);
console.log(typeof(datosConvertidos));

//de JSON a Objeto literal
let datosReConvertidos =JSON.parse(datosConvertidos);
console.log(datosReConvertidos);
console.log(typeof(datosReConvertidos));







