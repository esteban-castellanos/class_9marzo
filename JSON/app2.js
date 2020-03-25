let leerJSONdeTareas = require("./JSON/tareas.js/index.js"); // importar modulo

let argumento0 = process.argv[0]; //argumento por defecto
let argumento1 = process.argv[1]; //argumento por defecto
let accion = process.argv[2]; //argumento del usuario

switch (accion)
{
    case "listar":
        console.log("listado de tareas:");
        let tareas = leerJSONdeTareas("tareas.json"); //pasamos como argumento el archivo que vamos a leer
        for (let i =0; i< tareas.length; i++ )
        {
            console.log(i+"-"+ tareas[i].titulo+"-"+ tareas[i].estado);
        }
    break;
    case undefined:
        console.log("Necesito una accion (listar)");
        break;
    default:
        console.log("No comprendo la accion que quieres ejecutar");
        
        
        
}
 